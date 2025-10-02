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

            const firstLink = selected.querySelector('a[href^="/publication/"]');
            const firstItem = firstLink?.closest('li, article, div');
            if (firstItem && !firstItem.querySelector('.selected-pub-figure')) {
              firstItem.style.display = 'flex';
              firstItem.style.gap = '12px';
              firstItem.style.alignItems = 'flex-start';

              const textWrap = document.createElement('div');
              while (firstItem.firstChild) {
                textWrap.appendChild(firstItem.firstChild);
              }
              firstItem.appendChild(textWrap);

              const fig = document.createElement('figure');
              fig.className = 'selected-pub-figure';
              fig.style.margin = '0';
              fig.style.maxWidth = '320px';
              fig.style.flex = '0 0 320px';
              fig.style.borderRadius = '12px';
              fig.style.overflow = 'hidden';
              fig.style.boxShadow = '0 6px 18px rgba(0,0,0,0.25)';
              fig.innerHTML = '<img src="/media/efficient-allocation-figure.jpg" alt="Visual summary of attentional gain allocation patterns" style="display:block;width:100%;height:auto;">';

              firstItem.appendChild(fig);
            }
          }

          // Hide full list initially
          all.style.display = 'none';
          all.style.marginTop = '6px';

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
  - block: markdown
    id: selected-gallery
    content:
      text: |
        {{< rawhtml >}}
        <style>
          .selected-gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 1.25rem;
            justify-content: center;
            margin: 1.5rem 0 0;
          }

          .selected-gallery a {
            flex: 1 1 200px;
            max-width: 240px;
            display: block;
            text-decoration: none;
          }

          .selected-gallery img {
            width: 100%;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
            display: block;
          }
        </style>
        <div class="selected-gallery">
          <a href="/media/efficient-allocation-figure.jpg" target="_blank" rel="noopener">
            <img src="/media/efficient-allocation-figure.jpg" alt="Visualization of efficient allocation of attentional gain" loading="lazy">
          </a>
          <a href="/media/efficient-allocation-figure.jpg" target="_blank" rel="noopener">
            <img src="/media/efficient-allocation-figure.jpg" alt="Diagram illustrating resource allocation efficiency" loading="lazy">
          </a>
          <a href="/media/efficient-allocation-figure.jpg" target="_blank" rel="noopener">
            <img src="/media/efficient-allocation-figure.jpg" alt="Graphic overview of attentional resource distribution" loading="lazy">
          </a>
        </div>
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
