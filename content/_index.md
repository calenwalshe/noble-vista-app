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
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
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
  - block: markdown
    id: pubs-toggle
    content:
      text: |
        {{< rawhtml >}}
        <div style="text-align:center;margin-top:1rem;margin-bottom:1rem;">
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

          // Hide full list initially
          all.style.display = 'none';

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
  - block: collection
    id: papers
    content:
      title: All Publications
      filters:
        folders:
          - publication
    design:
      view: citation
  - block: resume-experience
    id: experience
    content:
      title: Experience
      username: admin
    design:
      date_format: 'January 2006'
      is_education_first: false
---
