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
    id: papers
    content:
      title: Papers
      filters:
        folders:
          - publication
    design:
      view: citation
  - block: resume-experience
    content:
      title: Experience
      username: admin
    design:
      date_format: 'January 2006'
      is_education_first: false
  - block: collection
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
    design:
      view: article-grid
      columns: 3
      show_date: false
      show_read_time: false
      show_read_more: false
---
