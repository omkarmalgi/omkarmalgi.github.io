/* ==========================================================================
   OMKAR MALGI — PORTFOLIO INTERACTIVE ENGINE (js/script.js)
   100% Offline-First, Full DOM Binding with js/content.js, Reduced-Motion Aware
   No SQL Lab Code — Includes Full-Screen Tableau Lightbox & 3D Tilt
   ========================================================================== */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------------
     1. IN-PAGE TOAST NOTIFICATION HELPER
     ------------------------------------------------------------------------ */
  let toastTimeout = null;
  function showToast(message) {
    const toast = document.getElementById('toast-banner');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () {
      toast.classList.remove('show');
    }, 3600);
  }

  /* ------------------------------------------------------------------------
     2. CLIPBOARD HELPER WITH FALLBACK
     ------------------------------------------------------------------------ */
  function copyTextToClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () {
          showToast(successMsg);
        },
        function () {
          fallbackCopy(text, successMsg);
        }
      );
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast(successMsg);
    } catch (err) {
      showToast('Copy action requires manual selection in this browser.');
    }
    document.body.removeChild(textarea);
  }

  function formatNumber(num, decimals) {
    return Number(num).toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }

  /* ------------------------------------------------------------------------
     3. FULL DOM BINDING ENGINE FOR js/content.js
        Connects every array and object in window.PORTFOLIO_CONTENT to the DOM:
        - Hero & About content (profile, telemetry, factSheet, corePillars)
        - Name & contact details (email, phone, location, footer)
        - LinkedIn & GitHub links across all sections
        - Skills (skills array -> #skills-command-grid + filter buttons)
        - Business Analysis workflow (workflow array -> #workflow-grid)
        - Experience (experience array -> #experience-timeline)
        - Education (education array -> #education-grid)
        - Getir KPI cards (featuredGetirProject.headlineKpis -> #getir-kpi-grid)
        - Getir case study details & Scope/Limitations disclosure
        - Projects 02–08 (verified descriptions, real-image galleries, drawers, repository and download links)
     ------------------------------------------------------------------------ */
  function syncFromContentConfig(customContent) {
    const cfg = customContent || window.PORTFOLIO_CONTENT;
    if (!cfg) return;

    const p = cfg.profile;
    if (p) {
      // Brand & Footer Name/Designation
      const brandNameEl = document.getElementById('brand-name-text');
      if (brandNameEl && p.name) brandNameEl.textContent = p.name.toUpperCase();
      const brandSubEl = document.getElementById('brand-sub-text');
      if (brandSubEl && p.brandSubtext) brandSubEl.textContent = p.brandSubtext;

      const footerNameEl = document.getElementById('footer-name-text');
      if (footerNameEl && p.name) footerNameEl.textContent = p.name.toUpperCase();
      const footerDesigEl = document.getElementById('footer-designation-text');
      if (footerDesigEl && p.designation) {
        footerDesigEl.textContent = p.designation + ' Portfolio';
      }

      // Hero Name, Designation, Headline, Supporting, Location, Portrait
      const firstNameEl = document.getElementById('hero-first-name');
      const lastNameEl = document.getElementById('hero-last-name');
      if (firstNameEl && p.firstName) firstNameEl.textContent = p.firstName;
      if (lastNameEl && p.lastName) lastNameEl.textContent = p.lastName;
      if (firstNameEl && lastNameEl && !p.firstName && p.name) {
        const parts = p.name.trim().split(/\s+/);
        firstNameEl.textContent = (parts[0] || '').toUpperCase();
        lastNameEl.textContent = parts.slice(1).join(' ').toUpperCase();
      }

      const portraitImg = document.getElementById('hero-portrait-img');
      if (portraitImg && p.portraitPath) {
        portraitImg.setAttribute('src', p.portraitPath);
        if (p.portraitAlt) portraitImg.setAttribute('alt', p.portraitAlt);
      }

      const designationEl = document.getElementById('hero-designation-text');
      if (designationEl && p.designation) designationEl.textContent = p.designation;

      const headlineEl = document.getElementById('hero-headline-text');
      if (headlineEl && p.heroHeadline) headlineEl.textContent = p.heroHeadline;

      const supportEl = document.getElementById('hero-supporting-text');
      if (supportEl && p.heroSupporting) supportEl.textContent = p.heroSupporting;

      const heroLocEl = document.getElementById('hero-location-tag');
      if (heroLocEl) {
        heroLocEl.textContent = p.heroLocationTag || (p.location ? p.location.toUpperCase() : '');
      }

      // Hero Telemetry Dock
      const telemetryDock = document.getElementById('hero-telemetry-dock');
      if (telemetryDock && Array.isArray(p.telemetry)) {
        const cells = telemetryDock.querySelectorAll('.telemetry-cell');
        p.telemetry.forEach(function (item, idx) {
          if (cells[idx]) {
            const lbl = cells[idx].querySelector('.telemetry-label');
            const val = cells[idx].querySelector('.telemetry-val');
            if (lbl && item.label) lbl.textContent = item.label;
            if (val && item.value) val.textContent = item.value;
          }
        });
      }

      // About Section Quote, Bio Paragraphs, Fact Sheet, and Core Pillars
      const quoteEl = document.getElementById('about-positioning-quote');
      if (quoteEl && p.aboutPositioning) quoteEl.textContent = '"' + p.aboutPositioning + '"';

      const bioP1 = document.getElementById('about-bio-p1');
      if (bioP1 && p.aboutBioParagraph1) bioP1.innerHTML = p.aboutBioParagraph1;

      const bioP2 = document.getElementById('about-bio-p2');
      if (bioP2 && p.aboutBioParagraph2) bioP2.innerHTML = p.aboutBioParagraph2;

      const factGrid = document.getElementById('about-fact-sheet-grid');
      if (factGrid && Array.isArray(p.factSheet)) {
        const boxes = factGrid.querySelectorAll('.fact-box');
        p.factSheet.forEach(function (item, idx) {
          if (boxes[idx]) {
            const lbl = boxes[idx].querySelector('.fact-box-label');
            const val = boxes[idx].querySelector('.fact-box-value');
            if (lbl && item.label) lbl.textContent = item.label;
            if (val && item.value) val.textContent = item.value;
          }
        });
      }

      const pillarsGrid = document.getElementById('about-pillars-grid');
      if (pillarsGrid && Array.isArray(p.corePillars)) {
        pillarsGrid.innerHTML = p.corePillars.map(function (pillarName, idx) {
          const num = String(idx + 1).padStart(2, '0');
          return (
            '<div class="pillar-chip">' +
              '<span class="pillar-index">' + num + '</span>' +
              '<span class="pillar-name">' + pillarName + '</span>' +
            '</div>'
          );
        }).join('');
      }

      // LinkedIn & GitHub Links across Hero, Getir, and Contact sections
      if (p.linkedin) {
        document.querySelectorAll('.linkedin-profile-link').forEach(function (a) {
          a.setAttribute('href', p.linkedin);
        });
      }
      if (p.github) {
        document.querySelectorAll('.github-profile-link').forEach(function (a) {
          a.setAttribute('href', p.github);
        });
      }

      // Contact Section Details & Mailto Links
      const cName = document.getElementById('contact-name-val');
      if (cName && p.name) cName.textContent = p.name;

      const cEmail = document.getElementById('contact-email-val');
      if (cEmail && p.email) {
        cEmail.textContent = p.email;
        cEmail.setAttribute('href', 'mailto:' + p.email);
      }

      const cMailtoBtn = document.getElementById('contact-mailto-btn');
      if (cMailtoBtn && p.email) {
        const subj = encodeURIComponent('Business Analyst Opportunity — ' + (p.name || 'Omkar Malgi'));
        cMailtoBtn.setAttribute('href', 'mailto:' + p.email + '?subject=' + subj);
      }

      const cMailtoCode = document.getElementById('contact-mailto-code');
      if (cMailtoCode && p.email) {
        cMailtoCode.textContent = 'mailto:' + p.email;
      }

      const copyBtn = document.getElementById('copy-email-btn');
      if (copyBtn && p.email) {
        copyBtn.setAttribute('data-email', p.email);
      }

      const cPhone = document.getElementById('contact-phone-val');
      if (cPhone && p.phoneDisplay) {
        cPhone.textContent = p.phoneDisplay;
        if (p.phoneHref) cPhone.setAttribute('href', 'tel:' + p.phoneHref);
      }

      const cLoc = document.getElementById('contact-location-val');
      if (cLoc && p.location) cLoc.textContent = p.location;

      // Resume Buttons Activation Check (Shows 'RESUME COMING SOON' when false; removes badge & downloads PDF when true)
      const resumeBtns = document.querySelectorAll('.resume-action-btn');
      resumeBtns.forEach(function (btn) {
        if (p.resumeAvailable && p.resumePath) {
          btn.classList.remove('btn-locked');
          btn.classList.add('btn-secondary');
          btn.removeAttribute('aria-disabled');
          btn.setAttribute('aria-label', 'Download Resume PDF');
          const badge = btn.querySelector('.lock-badge');
          if (badge) badge.remove();
          btn.onclick = function () {
            const link = document.createElement('a');
            link.href = p.resumePath;
            link.download = 'Omkar-Malgi-Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          };
        } else {
          btn.classList.remove('btn-secondary');
          btn.classList.add('btn-locked');
          btn.setAttribute('aria-disabled', 'true');
          btn.setAttribute('aria-label', 'Download Resume (Resume Coming Soon)');
          let badge = btn.querySelector('.lock-badge');
          if (!badge) {
            badge = document.createElement('span');
            badge.className = 'lock-badge';
            btn.appendChild(badge);
          }
          badge.textContent = 'RESUME COMING SOON';
          btn.onclick = function (e) {
            e.preventDefault();
            showToast('Resume Coming Soon: Place Omkar-Malgi-Resume.pdf in assets/resume/ and set resumeAvailable: true in js/content.js.');
          };
        }
      });
    }

    // ----------------------------------------------------------------------
    // SKILLS COMMAND CENTRE SYNC (cfg.skills)
    // ----------------------------------------------------------------------
    if (Array.isArray(cfg.skills)) {
      cfg.skills.forEach(function (skillGroup) {
        const card = document.querySelector('.skill-category-card[data-skill-cat="' + skillGroup.id + '"]');
        if (!card) return;
        const titleSpan = card.querySelector('.skill-cat-title span');
        if (titleSpan && skillGroup.title) titleSpan.textContent = skillGroup.title;
        const badgeEl = card.querySelector('.skill-cat-badge');
        if (badgeEl && skillGroup.badge) badgeEl.textContent = skillGroup.badge;
        const listEl = card.querySelector('.skill-items-list');
        if (listEl && Array.isArray(skillGroup.items)) {
          listEl.innerHTML = skillGroup.items.map(function (itemText) {
            return '<li class="skill-node"><span class="skill-node-dot"></span><span>' + itemText + '</span></li>';
          }).join('');
        }
      });
    }

    // ----------------------------------------------------------------------
    // BUSINESS ANALYSIS WORKFLOW SYNC (cfg.workflow)
    // ----------------------------------------------------------------------
    const workflowGrid = document.getElementById('workflow-grid');
    if (workflowGrid && Array.isArray(cfg.workflow)) {
      const stepCards = workflowGrid.querySelectorAll('.workflow-step-card');
      cfg.workflow.forEach(function (wf, idx) {
        const card = stepCards[idx];
        if (!card) return;
        const numEl = card.querySelector('.workflow-step-num');
        const titleEl = card.querySelector('.workflow-step-title');
        const descEl = card.querySelector('.workflow-step-desc');
        if (numEl && wf.step) numEl.textContent = wf.step;
        if (titleEl && wf.title) titleEl.textContent = wf.title;
        if (descEl && wf.desc) descEl.textContent = wf.desc;
      });
    }

    // ----------------------------------------------------------------------
    // FEATURED GETIR PROJECT, KPI CARDS & CASE STUDY SYNC (cfg.featuredGetirProject)
    // ----------------------------------------------------------------------
    const fg = cfg.featuredGetirProject;
    if (fg) {
      const badgeEl = document.getElementById('getir-badge-text');
      if (badgeEl && fg.badge) badgeEl.textContent = fg.badge;

      const titleEl = document.getElementById('getir-title-text');
      if (titleEl && fg.title) titleEl.textContent = fg.title;

      const scopeEl = document.getElementById('getir-scope-line');
      if (scopeEl && fg.scopeSummary) scopeEl.textContent = fg.scopeSummary;

      const covEl = document.getElementById('getir-dataset-coverage-text');
      if (covEl && fg.datasetCoverage) covEl.textContent = fg.datasetCoverage;

      const precEl = document.getElementById('getir-metric-precision-text');
      if (precEl && fg.metricPrecisionNote) precEl.textContent = fg.metricPrecisionNote;

      const toolsListEl = document.getElementById('getir-tools-list');
      if (toolsListEl && Array.isArray(fg.tools)) {
        toolsListEl.innerHTML = fg.tools.map(function (t) {
          return '<span class="tool-pill">' + t + '</span>';
        }).join('');
      }

      const bqEl = document.getElementById('getir-bq-text');
      if (bqEl && fg.businessQuestion) {
        bqEl.textContent = '"' + fg.businessQuestion.replace(/^"|"$/g, '') + '"';
      }

      // Getir 5 Headline KPI Cards
      const kpiGrid = document.getElementById('getir-kpi-grid');
      if (kpiGrid && Array.isArray(fg.headlineKpis)) {
        const kpiCards = kpiGrid.querySelectorAll('.kpi-metric-card');
        fg.headlineKpis.forEach(function (kpi, idx) {
          const card = kpiCards[idx];
          if (!card) return;
          if (kpi.tooltip) card.setAttribute('data-tooltip', kpi.tooltip);
          const lbl = card.querySelector('.kpi-label');
          const num = card.querySelector('.kpi-number');
          const sub = card.querySelector('.kpi-sub');
          if (lbl && kpi.label) lbl.textContent = kpi.label;
          if (sub && kpi.sub) sub.textContent = kpi.sub;
          if (num && typeof kpi.numericTarget === 'number') {
            const dec = typeof kpi.decimals === 'number' ? kpi.decimals : 0;
            const pre = kpi.prefix || '';
            const suf = kpi.suffix || '';
            num.setAttribute('data-target', String(kpi.numericTarget));
            num.setAttribute('data-decimals', String(dec));
            num.setAttribute('data-prefix', pre);
            num.setAttribute('data-suffix', suf);
            num.textContent = pre + formatNumber(kpi.numericTarget, dec) + suf;
          }
        });
      }

      // Getir Tableau Dashboard Screenshot & Lightbox Attributes
      const topbarLbl = document.getElementById('getir-dashboard-topbar-label');
      if (topbarLbl && fg.dashboardTopbarLabel) topbarLbl.textContent = fg.dashboardTopbarLabel;

      const dashImg = document.getElementById('getir-dashboard-img');
      if (dashImg && fg.dashboardImage) {
        dashImg.setAttribute('src', fg.dashboardImage);
      }

      const zoomBtn = document.getElementById('getir-zoom-trigger-btn');
      const imgBtn = document.getElementById('getir-dashboard-img-btn');
      if (zoomBtn) {
        if (fg.dashboardImage) zoomBtn.setAttribute('data-lightbox-src', fg.dashboardImage);
        if (fg.dashboardLightboxCaption) zoomBtn.setAttribute('data-lightbox-caption', fg.dashboardLightboxCaption);
      }
      if (imgBtn) {
        if (fg.dashboardImage) imgBtn.setAttribute('data-lightbox-src', fg.dashboardImage);
        if (fg.dashboardLightboxCaption) imgBtn.setAttribute('data-lightbox-caption', fg.dashboardLightboxCaption);
      }

      const dashCaption = document.getElementById('getir-dashboard-caption');
      if (dashCaption && fg.dashboardCaption) {
        dashCaption.innerHTML = fg.dashboardCaption;
      }

      // Live Tableau Public Button: Only shown when a verified URL is provided
      const tableauLiveBtn = document.getElementById('getir-live-tableau-btn');
      if (tableauLiveBtn) {
        if (fg.tableauPublicUrl && fg.tableauPublicUrl.trim() !== '') {
          tableauLiveBtn.setAttribute('href', fg.tableauPublicUrl.trim());
          tableauLiveBtn.style.display = 'inline-flex';
        } else {
          tableauLiveBtn.style.display = 'none';
        }
      }

      const getirGitBtn = document.getElementById('getir-github-btn');
      if (getirGitBtn) {
        if (fg.githubUrl && fg.githubUrl.trim() !== '') {
          getirGitBtn.setAttribute('href', fg.githubUrl.trim());
        } else if (p && p.github) {
          getirGitBtn.setAttribute('href', p.github);
        }
      }

      // Getir Expandable Case Study Details & Scope/Limitations Disclosure
      if (fg.caseStudy) {
        const cs = fg.caseStudy;
        const probEl = document.getElementById('getir-cs-problem');
        if (probEl && (cs.businessProblemAndObjective || cs.businessProblem)) {
          probEl.innerHTML = cs.businessProblemAndObjective || (cs.businessProblem + (cs.objective ? ' ' + cs.objective : ''));
        }
        const archEl = document.getElementById('getir-cs-architecture');
        if (archEl && cs.datasetArchitecture) archEl.innerHTML = cs.datasetArchitecture;

        const cleanEl = document.getElementById('getir-cs-cleaning');
        if (cleanEl && Array.isArray(cs.cleaningStages)) {
          cleanEl.innerHTML = cs.cleaningStages.map(function (item) {
            return '<li>' + item + '</li>';
          }).join('');
        }

        const kpisEl = document.getElementById('getir-cs-kpis');
        if (kpisEl && Array.isArray(cs.kpiFramework)) {
          kpisEl.innerHTML = cs.kpiFramework.map(function (item) {
            return '<li>' + item + '</li>';
          }).join('');
        }

        const findEl = document.getElementById('getir-cs-findings');
        if (findEl && Array.isArray(cs.findings)) {
          findEl.innerHTML = cs.findings.map(function (item) {
            return '<li>' + item + '</li>';
          }).join('');
        }

        const recEl = document.getElementById('getir-cs-recommendations');
        if (recEl && Array.isArray(cs.recommendations)) {
          recEl.innerHTML = cs.recommendations.map(function (item) {
            return '<li>' + item + '</li>';
          }).join('');
        }

        const limTitleEl = document.getElementById('getir-cs-limitations-title');
        if (limTitleEl && cs.scopeLimitationsTitle) limTitleEl.textContent = cs.scopeLimitationsTitle;

        const limEl = document.getElementById('getir-cs-limitations');
        if (limEl && Array.isArray(cs.scopeLimitations)) {
          limEl.innerHTML = cs.scopeLimitations.map(function (item) {
            return '<li>' + item + '</li>';
          }).join('');
        }
      }

      // Update all .getir-period-text spans (including any inside caseStudy HTML)
      if (fg.period) {
        document.querySelectorAll('.getir-period-text').forEach(function (el) {
          el.textContent = fg.period;
        });
      }
    }

    // ----------------------------------------------------------------------
    // SECONDARY PROJECTS (02–08) FULL SYNC (cfg.projects)
    // ----------------------------------------------------------------------
    if (Array.isArray(cfg.projects)) {
      cfg.projects.forEach(function (proj) {
        const card = document.getElementById(proj.id);
        if (!card) return;

        if (Array.isArray(proj.filterTags)) {
          card.setAttribute('data-proj-tags', proj.filterTags.join(','));
        }

        const numEl = card.querySelector('.project-number');
        if (numEl && proj.number) numEl.textContent = proj.number;

        const toolPillsEl = card.querySelector('.project-top-meta .tool-pills');
        if (toolPillsEl && Array.isArray(proj.tools)) {
          toolPillsEl.innerHTML = proj.tools.map(function (t) {
            return '<span class="tool-pill">' + t + '</span>';
          }).join('');
        }

        const titleEl = card.querySelector('.project-card-title');
        if (titleEl && proj.title) titleEl.textContent = proj.title;

        const periodEl = card.querySelector('.project-period-tag');
        if (periodEl && proj.period) periodEl.textContent = proj.period;

        const summaryEl = card.querySelector('.project-summary');
        if (summaryEl && proj.summary) summaryEl.textContent = proj.summary;

        // Replace generic conceptual diagrams with the exact project screenshots
        // or original document previews supplied for this portfolio.
        const visualPlaceholder = card.querySelector('.project-visual-thumb');
        const galleryImages = Array.isArray(proj.images) ? proj.images : (proj.image ? [{
          src: proj.image,
          alt: proj.title || 'Project preview',
          caption: proj.imageCaption || proj.title || 'Project preview',
          label: 'Project preview'
        }] : []);

        if (visualPlaceholder && galleryImages.length) {
          const gallery = document.createElement('div');
          gallery.className = 'project-visual-gallery' + (galleryImages.length > 1 ? ' multi-image-gallery' : ' single-image-gallery');
          galleryImages.forEach(function (item) {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'project-visual-thumb';
            button.setAttribute('data-lightbox-src', item.src);
            button.setAttribute('data-lightbox-caption', item.caption || item.label || proj.title || 'Project preview');
            button.setAttribute('aria-label', 'Enlarge ' + (item.alt || proj.title || 'project preview'));

            const image = document.createElement('img');
            image.className = 'project-card-img';
            image.src = item.src;
            image.alt = item.alt || proj.title || 'Project preview';
            image.loading = 'lazy';
            image.decoding = 'async';
            image.onerror = function () {
              button.classList.add('image-load-failed');
              button.setAttribute('aria-label', 'Preview image could not be loaded: ' + (item.label || proj.title || 'project image'));
            };
            button.appendChild(image);

            if (item.label) {
              const label = document.createElement('span');
              label.className = 'preview-image-label';
              label.textContent = item.label;
              button.appendChild(label);
            }
            gallery.appendChild(button);
          });
          visualPlaceholder.replaceWith(gallery);
        }

        // Remove the old generic schematic tag panels and conceptual badges.
        const schematic = card.querySelector('.project-schematic-preview');
        if (schematic) schematic.remove();
        card.querySelectorAll('.conceptual-arch-badge').forEach(function (badge) { badge.remove(); });

        // Create direct links to the actual project repository and deliverables.
        const actions = card.querySelector('.project-card-actions');
        let resourceWrap = card.querySelector('.project-resource-links');
        if (!resourceWrap && actions) {
          resourceWrap = document.createElement('div');
          resourceWrap.className = 'project-resource-links';
          actions.insertAdjacentElement('afterend', resourceWrap);
        }
        if (resourceWrap) {
          resourceWrap.innerHTML = '';
          (Array.isArray(proj.resources) ? proj.resources : []).forEach(function (resource, index) {
            const link = document.createElement('a');
            link.className = 'btn ' + (index === 0 ? 'btn-primary' : 'btn-secondary') + ' project-resource-btn';
            link.href = resource.url;
            link.textContent = resource.label;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            if (resource.download) link.setAttribute('download', '');
            resourceWrap.appendChild(link);
          });
          resourceWrap.style.display = resourceWrap.children.length ? 'flex' : 'none';
        }

        const drawer = card.querySelector('.case-study-drawer');
        if (drawer) {
          if (Array.isArray(proj.caseStudyBlocks) && proj.caseStudyBlocks.length > 0) {
            drawer.innerHTML = proj.caseStudyBlocks.map(function (blk, idx) {
              const mb = idx < proj.caseStudyBlocks.length - 1 ? ' style="margin-bottom: 12px;"' : '';
              return (
                '<div class="cs-block"' + mb + '>' +
                  '<h4>' + blk.heading + '</h4>' +
                  '<p>' + blk.body + '</p>' +
                '</div>'
              );
            }).join('');
          } else if (proj.businessProblem || proj.methodology || proj.recommendations) {
            drawer.innerHTML =
              '<div class="cs-block" style="margin-bottom: 12px;">' +
                '<h4>Business Problem &amp; Objective</h4>' +
                '<p>' + (proj.businessProblem || '') + (proj.objective ? ' ' + proj.objective : '') + '</p>' +
              '</div>' +
              '<div class="cs-block">' +
                '<h4>Analytical Methodology &amp; Recommendations</h4>' +
                '<p>' + (proj.methodology || '') + (proj.recommendations ? ' ' + proj.recommendations : '') + '</p>' +
              '</div>';
          }
        }

        const liveTabBtn = card.querySelector('.project-live-tableau-link');
        if (liveTabBtn) {
          if (proj.tableauUrl && proj.tableauUrl.trim() !== '') {
            liveTabBtn.setAttribute('href', proj.tableauUrl.trim());
            liveTabBtn.style.display = 'inline-flex';
            const label = liveTabBtn.querySelector('span');
            if (label) label.textContent = 'Open Tableau Public Dashboard';
          } else {
            liveTabBtn.style.display = 'none';
          }
        }

        const liveGitBtn = card.querySelector('.project-live-github-link');
        if (liveGitBtn) {
          if (proj.githubUrl && proj.githubUrl.trim() !== '') {
            liveGitBtn.setAttribute('href', proj.githubUrl.trim());
            liveGitBtn.style.display = 'inline-flex';
            const label = liveGitBtn.querySelector('span');
            if (label) label.textContent = 'Open Project Repository';
          } else {
            liveGitBtn.style.display = 'none';
          }
        }
      });
    }

    // ----------------------------------------------------------------------
    // PROFESSIONAL EXPERIENCE SYNC (cfg.experience)
    // ----------------------------------------------------------------------
    const expTimeline = document.getElementById('experience-timeline');
    if (expTimeline && Array.isArray(cfg.experience)) {
      const items = expTimeline.querySelectorAll('.timeline-item');
      cfg.experience.forEach(function (exp, idx) {
        let itemEl = items[idx];
        if (!itemEl) {
          itemEl = document.createElement('article');
          itemEl.className = 'timeline-item reveal-on-scroll revealed';
          itemEl.innerHTML =
            '<span class="timeline-marker" aria-hidden="true"></span>' +
            '<div class="timeline-card tilt-card-3d">' +
              '<div class="timeline-header">' +
                '<div>' +
                  '<h3 class="timeline-role"></h3>' +
                  '<div class="timeline-company"></div>' +
                '</div>' +
                '<span class="timeline-period"></span>' +
              '</div>' +
              '<ul class="timeline-list"></ul>' +
            '</div>';
          expTimeline.appendChild(itemEl);
        }
        const roleEl = itemEl.querySelector('.timeline-role');
        const compEl = itemEl.querySelector('.timeline-company');
        const perEl = itemEl.querySelector('.timeline-period');
        const listEl = itemEl.querySelector('.timeline-list');
        if (roleEl && exp.role) roleEl.textContent = exp.role;
        if (compEl && exp.company) compEl.textContent = exp.company;
        if (perEl && exp.period) perEl.textContent = exp.period;
        if (listEl && Array.isArray(exp.highlights)) {
          listEl.innerHTML = exp.highlights.map(function (h) {
            return '<li>' + h + '</li>';
          }).join('');
        }
      });
    }

    // ----------------------------------------------------------------------
    // EDUCATION SYNC (cfg.education)
    // ----------------------------------------------------------------------
    const eduGrid = document.getElementById('education-grid');
    if (eduGrid && Array.isArray(cfg.education)) {
      const cards = eduGrid.querySelectorAll('.edu-card');
      cfg.education.forEach(function (edu, idx) {
        let card = cards[idx];
        if (!card) {
          card = document.createElement('article');
          card.className = 'edu-card tilt-card-3d reveal-on-scroll revealed';
          card.innerHTML =
            '<div>' +
              '<h3 class="edu-degree"></h3>' +
              '<p class="edu-inst"></p>' +
            '</div>' +
            '<span class="edu-year tabular-nums"></span>';
          eduGrid.appendChild(card);
        }
        const degEl = card.querySelector('.edu-degree');
        const instEl = card.querySelector('.edu-inst');
        const yrEl = card.querySelector('.edu-year');
        if (degEl && edu.degree) degEl.textContent = edu.degree;
        if (instEl && edu.institution) instEl.textContent = edu.institution;
        if (yrEl && edu.year) yrEl.textContent = edu.year;
      });
    }
  }

  // Expose helper so edits or live console overrides can re-sync at any time
  window.syncPortfolioContent = syncFromContentConfig;
  syncFromContentConfig();

  /* ------------------------------------------------------------------------
     4. STICKY HEADER, ACTIVE SECTION HIGHLIGHTING & BACK-TO-TOP
     ------------------------------------------------------------------------ */
  const header = document.getElementById('site-header');
  const backToTopBtn = document.getElementById('back-to-top');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');

  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    if (header) {
      if (scrollY > 24) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 480) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    let currentSectionId = '';
    const offsetCheck = scrollY + 170;
    sections.forEach(function (sec) {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (offsetCheck >= top && offsetCheck < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(function (link) {
        const href = link.getAttribute('href');
        if (href === '#' + currentSectionId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. MOBILE NAVIGATION MENU TOGGLE
     ------------------------------------------------------------------------ */
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navList = document.getElementById('nav-links');

  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', function () {
      const isOpen = navList.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    const allMenuLinks = navList.querySelectorAll('a');
    allMenuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navList.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. SUBTLE CURSOR SPOTLIGHT & SELECTIVE 3D CARD TILT
     ------------------------------------------------------------------------ */
  const spotlight = document.getElementById('cursor-spotlight');
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;

  if (spotlight && !prefersReducedMotion && isFinePointer) {
    window.addEventListener('mousemove', function (e) {
      spotlight.style.opacity = '1';
      spotlight.style.left = e.clientX + 'px';
      spotlight.style.top = e.clientY + 'px';
    }, { passive: true });
  }

  const tiltCards = document.querySelectorAll('.tilt-card-3d');
  if (!prefersReducedMotion && isFinePointer) {
    tiltCards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -2.5;
        const rotateY = ((x - centerX) / centerX) * 2.5;
        card.style.transform = 'perspective(900px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg) translateY(-2px)';
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  /* ------------------------------------------------------------------------
     7. SCROLL-TRIGGERED REVEAL & ANIMATED KPI COUNTERS
     ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const kpiCounters = document.querySelectorAll('.kpi-counter');
  const animatedKpis = new WeakSet();

  function animateCounter(el) {
    if (animatedKpis.has(el)) return;
    animatedKpis.add(el);

    const target = parseFloat(el.getAttribute('data-target') || '0');
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';

    if (prefersReducedMotion) {
      el.textContent = prefix + formatNumber(target, decimals) + suffix;
      return;
    }

    const duration = 1300;
    const startTime = performance.now();

    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVal = target * eased;
      el.textContent = prefix + formatNumber(currentVal, decimals) + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + formatNumber(target, decimals) + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });

    const kpiObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          kpiObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    kpiCounters.forEach(function (counter) {
      kpiObserver.observe(counter);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('revealed');
    });
    kpiCounters.forEach(function (counter) {
      animateCounter(counter);
    });
  }

  /* ------------------------------------------------------------------------
     8. SKILLS COMMAND CENTRE CATEGORY FILTER
     ------------------------------------------------------------------------ */
  const skillFilterBtns = document.querySelectorAll('.skill-filter-btn');
  const skillCards = document.querySelectorAll('.skill-category-card');

  skillFilterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = btn.getAttribute('data-skill-filter');

      skillFilterBtns.forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');

      skillCards.forEach(function (card) {
        const category = card.getAttribute('data-skill-cat');
        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden-card');
        } else {
          card.classList.add('hidden-card');
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     9. FEATURED PROJECTS FILTER & EXPANDABLE CASE STUDIES
     ------------------------------------------------------------------------ */
  const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  projectFilterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = btn.getAttribute('data-proj-filter');

      projectFilterBtns.forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');

      projectCards.forEach(function (card) {
        const tags = (card.getAttribute('data-proj-tags') || '').split(',');
        if (filter === 'all' || tags.indexOf(filter) !== -1) {
          card.classList.remove('hidden-project');
        } else {
          card.classList.add('hidden-project');
        }
      });
    });
  });

  const caseToggleBtns = document.querySelectorAll('.case-toggle-btn');
  caseToggleBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const targetId = btn.getAttribute('data-target-drawer');
      const drawer = document.getElementById(targetId);
      if (!drawer) return;

      const isOpen = drawer.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      const labelSpan = btn.querySelector('.toggle-btn-label');
      if (labelSpan) {
        labelSpan.textContent = isOpen ? 'Collapse Case Study' : 'Expand Full Case Study';
      }
    });
  });

  /* ------------------------------------------------------------------------
     10. FULL-SCREEN DASHBOARD & VISUAL LIGHTBOX MODAL
     ------------------------------------------------------------------------ */
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');
  const lightboxTriggers = document.querySelectorAll('[data-lightbox-src]');

  function openLightbox(src, captionText, altText) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.setAttribute('src', src);
    lightboxImg.setAttribute('alt', altText || 'Expanded Project Visual');
    if (lightboxCaption) {
      lightboxCaption.textContent = captionText || '';
    }
    lightboxModal.classList.add('open');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  lightboxTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const innerImg = trigger.querySelector('img');
      const src = (innerImg && innerImg.getAttribute('src')) || trigger.getAttribute('data-lightbox-src');
      const caption = trigger.getAttribute('data-lightbox-caption') || '';
      const alt = (innerImg && innerImg.getAttribute('alt')) || 'Dashboard Screenshot Full-Screen Preview';
      openLightbox(src, caption, alt);
    });
  });

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', closeLightbox);
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', function (e) {
      if (e.target === lightboxModal) {
        closeLightbox();
      }
    });
  }

  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('open')) {
      closeLightbox();
    }
  });

  /* ------------------------------------------------------------------------
     11. INTERACTIVE CHART TOOLTIPS
     ------------------------------------------------------------------------ */
  const chartTooltip = document.getElementById('chart-tooltip');
  const tooltipTargets = document.querySelectorAll('[data-tooltip]');

  if (chartTooltip) {
    tooltipTargets.forEach(function (target) {
      target.addEventListener('mouseenter', function () {
        const text = target.getAttribute('data-tooltip');
        if (!text) return;
        chartTooltip.textContent = text;
        chartTooltip.style.opacity = '1';
      });

      target.addEventListener('mousemove', function (e) {
        chartTooltip.style.left = (e.clientX + 14) + 'px';
        chartTooltip.style.top = (e.clientY - 28) + 'px';
      });

      target.addEventListener('mouseleave', function () {
        chartTooltip.style.opacity = '0';
      });
    });
  }

  /* ------------------------------------------------------------------------
     12. COPY EMAIL HANDLER
     ------------------------------------------------------------------------ */
  const copyEmailBtn = document.getElementById('copy-email-btn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', function () {
      const cfg = window.PORTFOLIO_CONTENT;
      const email = (cfg && cfg.profile && cfg.profile.email) || copyEmailBtn.getAttribute('data-email') || 'omkarmalgi98@gmail.com';
      copyTextToClipboard(email, 'Email copied: ' + email);
    });
  }
})();
