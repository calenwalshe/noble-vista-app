---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: resume-biography-3
    id: bio
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ''
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      # Apply a gradient background
      css_class: hbx-bg-gradient
      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  - block: collection
    id: selected-papers
    content:
      title: Selected Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: citation
      spacing:
        padding:
          - 0rem
          - 0
          - 0rem
          - 0
  - block: markdown
    id: pubs-toggle
    content:
      text: |
        {{< rawhtml >}}
        <div style="text-align:center;margin-top:6px;margin-bottom:6px;">
          <button id="toggle-all-pubs" type="button" style="padding:0.5rem 0.75rem;border:1px solid #ccc;border-radius:8px;">
            See All Publications
          </button>
        </div>
        <script>
        document.addEventListener('DOMContentLoaded', () => {
          const selected = document.getElementById('selected-papers');
          const all = document.getElementById('papers');
          const btn = document.getElementById('toggle-all-pubs');
          if (!all || !btn) return;

          // Tighten spacing between sections (10% ≈ 6px)
          if (selected) {
            selected.style.marginBottom = '6px';
          }

          // Hide full list initially
          all.style.display = 'none';
          all.style.marginTop = '6px';

          // Replace selected publication links with publisher URLs
          const publisherLinks = new Map([
            [
              '/publication/efficient-allocation-attentional-sensitivity/',
              'https://www.sciencedirect.com/science/article/pii/S0960982221013658'
            ],
            [
              '/publication/a-computational-dual-process-model-of-fixation-duration-control-in-natural-scene-viewing/',
              'https://link.springer.com/article/10.1007/s42113-021-00111-4'
            ],
            [
              '/publication/atari-head-atari-human-eye-tracking-and-demonstration-dataset/',
              'https://aaai.org/ojs/index.php/AAAI/article/view/6161'
            ]
          ]);

          if (selected) {
            const anchors = selected.querySelectorAll('a[href]');
            anchors.forEach((anchor) => {
              try {
                const path = new URL(anchor.href, location.origin).pathname;
                const publisherUrl = publisherLinks.get(path);
                if (publisherUrl) {
                  anchor.href = publisherUrl;
                  anchor.rel = 'noopener';
                }
              } catch (error) {
                console.warn('Skipping publisher link substitution:', error);
              }
            });
          }

          // Toggle show/hide
          btn.addEventListener('click', () => {
            const isHidden = getComputedStyle(all).display === 'none';
            all.style.display = isHidden ? '' : 'none';
            btn.textContent = isHidden ? 'Hide Publications' : 'See All Publications';
          });

          // De-duplicate: hide items in "All" that already appear in "Selected"
          try {
            const toPath = (a) => new URL(a.getAttribute('href'), location.origin).pathname;
            const selectedSet = new Set(
              Array.from(selected?.querySelectorAll('a[href^="/publication/"]') || []).map(toPath)
            );
            Array.from(all.querySelectorAll('a[href^="/publication/"]')).forEach((a) => {
              const p = toPath(a);
              if (selectedSet.has(p)) {
                const item = a.closest('li, article, div');
                if (item) item.style.display = 'none';
              }
            });
          } catch (e) {
            console.warn('Publication de-dup skipped:', e);
          }
        });
        </script>
        {{< /rawhtml >}}
    design:
      spacing:
        padding:
          - 0rem
          - 0
          - 0rem
          - 0
  - block: collection
    id: papers
    content:
      title: All Publications
      filters:
        folders:
          - publication
    design:
      view: citation
      spacing:
        padding:
          - 0rem
          - 0
          - 0rem
          - 0
  - block: resume-experience
    id: experience
    content:
      title: Experience
      username: admin
    design:
      date_format: 'January 2006'
      is_education_first: false
---
