/**
 * NAVA CYBER SOLUTIONS - APPLICATION LOGIC & ROUTER
 * Author: ABHIRAM ALLADA - Founder
 * License: Proprietary / All Rights Reserved
 */

(function () {
  'use strict';

  /* ==========================================================================
     GLOBAL CONSTANTS & DATA STORES
     ========================================================================== */

  const ICONS = {
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
    lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
  };

  const SERVICES = [
    {
      id: 'cybersecurity-consulting',
      icon: 'shield',
      title: 'Cybersecurity Consulting',
      shortDesc: 'Strategic defensive advisory, threat modeling, and tailored cybersecurity planning for businesses and modern web platforms.',
      overview: 'Practical, structured cybersecurity guidance designed to help organisations understand their threat landscape, prioritize defensive investments, and cultivate robust security hygiene.',
      useCases: [
        'Organisations planning new digital platforms seeking security architecture guidance.',
        'Businesses reviewing internal security controls and baseline compliance hygiene.',
        'Teams establishing secure development workflows and policy frameworks.'
      ],
      deliverables: [
        'Documented threat landscape & defensive architecture evaluation.',
        'Actionable roadmap with risk-weighted priority recommendations.',
        'Ongoing consultation sessions to assist implementation.'
      ]
    },
    {
      id: 'web-app-security',
      icon: 'lock',
      title: 'Web Application Security',
      shortDesc: 'Hardening modern web applications against OWASP Top 10 vulnerabilities, authentication risks, and logic flaws.',
      overview: 'Specialised application-layer defense that identifies vulnerabilities in client interfaces, APIs, and business workflows before malicious actors can exploit them.',
      useCases: [
        'Web apps undergoing architectural updates or major feature releases.',
        'Platforms handling sensitive user input, tokens, or credential operations.',
        'API services requiring rigorous validation and access control verification.'
      ],
      deliverables: [
        'In-depth review of agreed web application scope.',
        'Detailed vulnerability breakdown with reproduction steps and severity rankings.',
        'Concrete remediation code snippets and verification re-test guidance.'
      ]
    },
    {
      id: 'secure-web-dev',
      icon: 'code',
      title: 'Secure Web Development',
      shortDesc: 'End-to-end development of modern, high-performance web applications built from day one with security-first architecture.',
      overview: 'Engineered web solutions crafted with zero-trust architecture, robust input sanitation, secure session management, and exceptional Apple-standard UI aesthetics.',
      useCases: [
        'Bespoke portals and enterprise web interfaces requiring high resilience.',
        'Interactive dashboards requiring seamless client-side state security.',
        'Full-stack digital products requiring minimal attack surface and rapid performance.'
      ],
      deliverables: [
        'Production-ready, thoroughly validated responsive codebase.',
        'Secure deployment pipeline configuration (Firebase, Vercel, or cloud hosting).',
        'Developer documentation covering architecture and security controls.'
      ]
    },
    {
      id: 'vulnerability-assessment',
      icon: 'search',
      title: 'Security Testing & Vulnerability Assessment',
      shortDesc: 'Systematic, authorized security assessments within strictly defined boundaries to identify exposure points.',
      overview: 'Permission-based technical evaluations combining automated discovery with manual verification to uncover configuration weaknesses and system risks.',
      useCases: [
        'Periodic posture reviews for agreed public-facing digital assets.',
        'Pre-launch verification of new cloud-hosted services.',
        'Discovery of legacy dependencies and misconfigured TLS/HTTP headers.'
      ],
      deliverables: [
        'Formal Rules of Engagement and signed scope authorization.',
        'Comprehensive technical findings report categorized by severity.',
        'Remediation guide and post-mitigation re-assessment.'
      ]
    },
    {
      id: 'ai-solutions',
      icon: 'cpu',
      title: 'AI-Powered Solutions',
      shortDesc: 'Intelligent, practical AI applications and heuristic analysis tools designed with data privacy at their core.',
      overview: 'Building responsible machine learning and heuristic intelligence products-such as Guess Proof AI-that deliver real user utility without compromising privacy or leaking credentials.',
      useCases: [
        'Client-side pattern recognition and password risk indicators.',
        'Automated document and log security classification.',
        'Predictive risk modeling for digital workflows.'
      ],
      deliverables: [
        'Interactive AI / heuristic models optimized for edge or client execution.',
        'Zero-knowledge data architectures ensuring sensitive inputs never transmit.',
        'Interactive UI integration with intuitive visual feedback.'
      ]
    },
    {
      id: 'technical-consulting',
      icon: 'globe',
      title: 'Technical Consulting & Digital Solutions',
      shortDesc: 'Broad-spectrum technology advisory, system architecture reviews, cloud hosting strategies, and digital transformation.',
      overview: 'Objective, expert technical counsel to help founders and companies make sound technology choices, evaluate vendors, and design reliable infrastructure.',
      useCases: [
        'Technology stack selection and technical feasibility studies.',
        'Cloud infrastructure cost and resilience optimization.',
        'Digital product roadmapping from MVP to production scale.'
      ],
      deliverables: [
        'Architectural design briefs and technology recommendations.',
        'Independent code quality and maintainability reviews.',
        'Structured implementation milestones and technical specifications.'
      ]
    }
  ];

  const ACADEMY_RESOURCES = [
    {
      id: 'res-1',
      title: 'Password Security & Heuristic Pattern Analysis',
      category: 'Cybersecurity Fundamentals',
      type: 'Guide & Interactive Lab',
      desc: 'Understand why common password algorithms fail against human habits like keyboard walks, leetspeak, and predictable dates.',
      status: 'Coming Soon',
      modules: [
        'How credential stuffing and dictionary attacks actually operate',
        'Entropy calculation vs. human cognitive patterns',
        'Practical defense: Password managers, passkeys, and MFA best practices'
      ]
    },
    {
      id: 'res-2',
      title: 'Web Security 101: Understanding OWASP Top 10',
      category: 'Web Application Security',
      type: 'Learning Path',
      desc: 'A foundational walkthrough of broken access control, injection flaws, cryptographic failures, and how modern developers safeguard web applications.',
      status: 'Coming Soon',
      modules: [
        'Deep dive into Broken Access Control and IDORs',
        'Cross-Site Scripting (XSS) and Content Security Policy (CSP)',
        'Server-Side Request Forgery (SSRF) prevention techniques'
      ]
    },
    {
      id: 'res-3',
      title: 'Network Packet Analysis & Wire Fundamentals',
      category: 'Networking Fundamentals',
      type: 'Reference Guide',
      desc: 'Master the OSI model, TCP 3-way handshakes, DNS resolution mechanics, and TLS encryption handshakes.',
      status: 'Coming Soon',
      modules: [
        'TCP/IP stack fundamentals and port mapping',
        'DNS records, cache poisoning, and DNSSEC',
        'How TLS 1.3 encrypts application traffic'
      ]
    },
    {
      id: 'res-4',
      title: 'Secure Coding Principles in Modern JavaScript',
      category: 'Secure Coding',
      type: 'Technical Workshop',
      desc: 'Hands-on strategies to eliminate DOM-based XSS, prevent prototype pollution, and sanitize inputs in frontend and Node.js environments.',
      status: 'Coming Soon',
      modules: [
        'Safe DOM manipulation techniques',
        'Dependency supply chain security with npm audit',
        'Secure storage: Cookies vs. Web Storage'
      ]
    },
    {
      id: 'res-5',
      title: 'Ethical Reconnaissance & Vulnerability Discovery',
      category: 'Ethical Hacking Concepts',
      type: 'Curriculum Outline',
      desc: 'Learn the legal and ethical methodology of authorized scoped security assessments and discovery workflows.',
      status: 'Coming Soon',
      modules: [
        'Rules of engagement and authorized scoping documents',
        'Passive open-source intelligence (OSINT)',
        'Structured reporting and responsible disclosure'
      ]
    },
    {
      id: 'res-6',
      title: 'Applied Cryptography & Zero-Knowledge Concepts',
      category: 'Cryptography Fundamentals',
      type: 'Study Guide',
      desc: 'An approachable mathematical and practical introduction to symmetric vs. asymmetric encryption, hashing, and zero-knowledge architectures.',
      status: 'Coming Soon',
      modules: [
        'Hashing vs. Encryption vs. Encoding',
        'Public-key infrastructure (PKI) and digital certificates',
        'Introduction to Zero-Knowledge Proofs in modern privacy'
      ]
    },
    {
      id: 'res-7',
      title: 'Personal Digital Safety & Device Hardening',
      category: 'Digital Safety and Best Practices',
      type: 'Action Checklist',
      desc: 'Actionable steps for protecting personal identities, avoiding social engineering traps, and hardening personal operating systems.',
      status: 'Coming Soon',
      modules: [
        'Phishing, smishing, and social engineering indicators',
        'Hardening browser privacy configurations',
        'Emergency response checklist if an account is compromised'
      ]
    }
  ];

  const ACADEMY_EVENTS = [
    {
      id: 'event-1',
      title: 'Introduction to Cybersecurity at RCE',
      organizer: 'Organized by NAVA Cyber Solutions',
      type: 'Workshop',
      badgeClass: 'event-badge-workshop',
      category: 'Cyber Defense & Security Foundations',
      date: 'October 9 - 13, 2026',
      time: '5-Day Intensive Technical Workshop',
      format: 'Interactive Workshop & Lab Drills',
      level: 'Foundational to Practical',
      desc: 'An intensive technical workshop on "Introduction to Cybersecurity at RCE", organized by NAVA Cyber Solutions from October 9th to 13th, 2026. Covered core defensive security principles, real-world network packet inspection, web vulnerability mitigation, and hands-on defensive hardening methodologies.',
      highlights: [
        'Organized by NAVA Cyber Solutions at RCE',
        '5 days of intensive defensive security labs & analysis (Oct 9 - 13, 2026)',
        'Hands-on network forensics, Wireshark, and web defense',
        'Workshop certificates available soon for verified attendees'
      ],
      status: 'closed',
      statusText: 'Registration Closed',
      actionText: 'Registration Closed',
      actionLink: '#academy/certifications'
    }
  ];

  const ACADEMY_CERTIFICATES = [
    {
      id: 'cert-workshop-2026',
      title: 'Workshop Certificate of Completion',
      workshopName: 'Introduction to Cybersecurity at RCE',
      organizer: 'Organized by NAVA Cyber Solutions',
      category: 'Cybersecurity Workshop',
      dates: 'October 9 - 13, 2026',
      credentialId: 'NAVA-CERT-RCE-2026',
      issuer: 'Organized by NAVA Cyber Solutions',
      desc: 'Official Certificate of Completion for verified participants of "Introduction to Cybersecurity at RCE" organized by NAVA Cyber Solutions (conducted October 9 - 13, 2026).',
      status: 'soon',
      statusText: 'Available Soon',
      actionUrl: 'pages/coming-soon.html'
    }
  ];

  const ROADMAP_STAGES = [
    {
      id: 'step-1',
      number: '01',
      stepNumber: 'Step 1',
      title: 'Networking Fundamentals',
      targetCert: 'CompTIA Network+ (N10-009)',
      summary: 'Start here - no exceptions. Networking is the foundation of everything in cybersecurity. Learn how data moves, how the internet works, TCP/IP, DNS, subnetting, firewalls, and the OSI model. CompTIA Network+ (N10-009) is the certification this step targets.',
      topics: [
        'TCP/IP Protocol Suite & 3-way handshakes',
        'DNS architecture, resolution & record types',
        'Firewall architectures and stateful filtering',
        'IPv4 Subnetting & CIDR calculations',
        'The OSI 7-Layer reference model'
      ],
      freeWebsites: [
        { title: 'Professor Messer N10-009 Playlist (Free)', url: 'https://www.professormesser.com/network-plus/n10-009/n10-009-training-course/' },
        { title: 'Professor Messer Practice Tests (Free)', url: 'https://www.professormesser.com/' },
        { title: 'Cisco Networking Academy - Free Courses', url: 'https://www.netacad.com/' }
      ],
      youtube: [
        { title: 'Professor Messer N10-009 Full Course (YouTube)', url: 'https://www.youtube.com/user/professormesser' }
      ],
      proTip: "Do 20-30 practice questions every evening alongside the videos. Don't just watch - test yourself."
    },
    {
      id: 'step-2',
      number: '02',
      stepNumber: 'Step 2',
      title: 'Security Fundamentals',
      targetCert: 'CompTIA Security+ (SY0-701)',
      summary: 'Security+ is the most recognized entry-level security certification. This week covers threats, attacks, cryptography, identity management, risk, and compliance. Passing Security+ opens the door to SOC Analyst, IT Security roles, and government jobs.',
      topics: [
        'Threat actors, attack vectors & mitigation',
        'Applied cryptography: symmetric, asymmetric & hashing',
        'Identity & Access Management (IAM), MFA and SSO',
        'Risk assessment, vulnerability management & compliance',
        'Security operations & incident response concepts'
      ],
      freeWebsites: [
        { title: 'Professor Messer SY0-701 (Free Full Course)', url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/' },
        { title: 'CyberDefenders Free Labs', url: 'https://cyberdefenders.org/' },
        { title: 'TryHackMe Security+ Path (Free Tier)', url: 'https://tryhackme.com/' }
      ],
      youtube: [
        { title: 'Professor Messer SY0-701 Playlist', url: 'https://www.youtube.com/user/professormesser' },
        { title: 'Pete Zerger SY0-701 Alternative', url: 'https://www.youtube.com/@InsideCloudAndSecurity' }
      ],
      proTip: "Security+ covers a LOT of vocabulary. Make flashcards for every acronym - there are hundreds and they're tested heavily."
    },
    {
      id: 'step-3',
      number: '03',
      stepNumber: 'Step 3',
      title: 'Linux Fundamentals',
      targetCert: 'Linux System Administration & Security',
      summary: 'Every serious cybersecurity role requires Linux. Two weeks here: basic commands, file system navigation, permissions, shell scripting, process management, and networking commands. Most security tools run on Linux - you need to be comfortable here before moving forward.',
      topics: [
        'Command line navigation & core utilities (grep, awk, sed, find)',
        'Linux file system hierarchy & permission models (chmod, chown)',
        'Bash shell scripting for task automation',
        'Process inspection, daemons & service management (systemd)',
        'Network diagnostics on Linux (ss, ip, netstat, iptables)'
      ],
      freeWebsites: [
        { title: 'Linux Journey (Free interactive tutorials)', url: 'https://linuxjourney.com/' },
        { title: 'Cisco Linux Unhatched (Free)', url: 'https://www.netacad.com/courses/os-it/ndg-linux-unhatched' },
        { title: 'LabEx Linux Hands-on Labs (Free)', url: 'https://labex.io/' },
        { title: 'OverTheWire: Bandit (Linux wargame - Free)', url: 'https://overthewire.org/wargames/bandit/' }
      ],
      youtube: [
        { title: 'Linux Command Line Full Course - NetworkChuck', url: 'https://www.youtube.com/@NetworkChuck' },
        { title: 'Linux for Hackers - NetworkChuck', url: 'https://www.youtube.com/@NetworkChuck' }
      ],
      proTip: 'OverTheWire Bandit is the best Linux practice tool ever made. Do at least 10 levels alongside your tutorials.'
    },
    {
      id: 'step-4',
      number: '04',
      stepNumber: 'Step 4',
      title: 'Python for Cybersecurity',
      targetCert: 'Scripting & Security Automation',
      summary: 'Python is the scripting language of cybersecurity. Two weeks to learn the basics - variables, loops, functions, file handling, and network sockets. Then write actual security scripts: a port scanner, a log parser, a password checker. This is what separates you from people who only know theory.',
      topics: [
        'Core syntax: variables, control flow, functions & data structures',
        'File I/O, regex string matching & parsing log files',
        'Network socket programming with socket library',
        'Interacting with web APIs using requests',
        'Building security tools: port scanner, risk checker & hash analyzer'
      ],
      freeWebsites: [
        { title: 'Python.org Official Tutorial (Free)', url: 'https://docs.python.org/3/tutorial/' },
        { title: 'Real Python (Free articles + tutorials)', url: 'https://realpython.com/' },
        { title: 'HackerRank Python Challenges (Free)', url: 'https://www.hackerrank.com/domains/python' },
        { title: 'LabEx Python Labs (Free)', url: 'https://labex.io/' },
        { title: 'Codecademy Learn Python (Free Tier)', url: 'https://www.codecademy.com/' }
      ],
      youtube: [
        { title: 'Python for Beginners - TheCyberMentor', url: 'https://www.youtube.com/@TCMDoctor' },
        { title: 'Automate the Boring Stuff - Full Course (Free)', url: 'https://www.youtube.com/' }
      ],
      proTip: 'Build a simple port scanner on Day 42. If you can do that, you understand Python well enough to move forward.'
    },
    {
      id: 'step-5',
      number: '05',
      stepNumber: 'Step 5',
      title: 'Network Traffic Analysis',
      targetCert: 'Wireshark & Packet Inspection',
      summary: "Wireshark and TCPdump are essential tools for any security analyst. Learn to capture, filter, and analyze network traffic. Understand what normal looks like - so you can spot what's abnormal. Covers Wireshark, TCPdump, Suricata IDS/IPS, and real packet analysis scenarios.",
      topics: [
        'Capturing live packets and designing Wireshark display filters',
        'Command-line packet capture and parsing with TCPdump',
        'Identifying abnormal traffic, port scans & beaconing',
        'Suricata IDS/IPS setup and signature alerts',
        'Dissecting real-world malware PCAP captures'
      ],
      freeWebsites: [
        { title: 'Wireshark Official Docs + University Course (Free)', url: 'https://www.wireshark.org/docs/' },
        { title: 'Wireshark Tutorial - Guru99 (Free)', url: 'https://www.guru99.com/wireshark-tutorial.html' },
        { title: 'TCPdump Tutorial - Daniel Miessler (Free)', url: 'https://danielmiessler.com/study/tcpdump/' },
        { title: 'Malware Traffic Analysis Practice Pcaps (Free)', url: 'https://www.malware-traffic-analysis.net/' }
      ],
      youtube: [
        { title: 'Wireshark Tutorial for Beginners - David Bombal', url: 'https://www.youtube.com/@DavidBombal' },
        { title: 'Suricata IDS/IPS Full Setup', url: 'https://www.youtube.com/' }
      ],
      proTip: 'Download real pcap files from malware-traffic-analysis.net and try to identify the attack before reading the writeup.'
    },
    {
      id: 'step-6',
      number: '06',
      stepNumber: 'Step 6',
      title: 'Git and GitHub',
      targetCert: 'Version Control & Portfolio Engineering',
      summary: 'Every security professional needs Git. One week is enough. Learn to create repos, commit changes, branch, merge, and collaborate. Your security scripts, notes, and projects will all live on GitHub - and hiring managers will look at your profile.',
      topics: [
        'Git fundamentals: init, commit, push, pull & history log',
        'Branching strategies, merging & resolving conflicts',
        'Remote repositories, SSH keys & GitHub workflows',
        'Writing clean technical READMEs with Markdown',
        'Publishing public security scripts and tools as a portfolio'
      ],
      freeWebsites: [
        { title: 'Learn Git Branching (Interactive - Free)', url: 'https://learngitbranching.js.org/' },
        { title: 'Try Git - GitHub (Free)', url: 'https://skills.github.com/' },
        { title: 'Git Immersion Tutorial (Free)', url: 'https://gitimmersion.com/' },
        { title: 'Codecademy Learn Git (Free Tier)', url: 'https://www.codecademy.com/' }
      ],
      youtube: [
        { title: 'Git and GitHub Full Course - FreeCodeCamp', url: 'https://www.youtube.com/@freecodecamp' }
      ],
      proTip: 'By end of this week, your Python scripts from Week 5-6 should be pushed to a public GitHub repo. This becomes your portfolio.'
    },
    {
      id: 'step-7',
      number: '07',
      stepNumber: 'Step 7',
      title: 'Log Analysis and the ELK Stack',
      targetCert: 'SIEM Operations & Threat Hunting',
      summary: 'ELK (Elasticsearch, Logstash, Kibana) is the most widely used SIEM tool in enterprise security. SOC Analysts use this daily to hunt threats in log data. This week: set up ELK locally, ingest logs, build dashboards, and write detection queries. This alone makes your resume stand out.',
      topics: [
        'SIEM fundamentals: centralized log architecture and parsing',
        'Elasticsearch cluster basics, indexing & query syntax',
        'Logstash data pipeline filters and transformation',
        'Building interactive SOC monitoring dashboards in Kibana',
        'Writing detection queries for failed SSH logins and brute force'
      ],
      freeWebsites: [
        { title: 'Elastic Official Learn Hub (Free)', url: 'https://www.elastic.co/learn' },
        { title: 'Logz.io Complete ELK Stack Tutorial (Free)', url: 'https://logz.io/learn/complete-guide-elk-stack/' },
        { title: 'ELK Stack on AWS Free Tier (Free trial)', url: 'https://aws.amazon.com/free/' }
      ],
      youtube: [
        { title: 'ELK Stack Full Tutorial - Edureka (YouTube)', url: 'https://www.youtube.com/@edurekaIN' },
        { title: 'Build a SIEM with ELK - John Hammond', url: 'https://www.youtube.com/@_JohnHammond' }
      ],
      proTip: 'Set up ELK locally using Docker. Ingest your own system logs and try to write a query that detects failed SSH login attempts.'
    },
    {
      id: 'step-8',
      number: '08',
      stepNumber: 'Step 8',
      title: 'Cloud Security Fundamentals',
      targetCert: 'AWS Cloud Security / Certified Cloud Practitioner',
      summary: '90% of enterprise infrastructure is in the cloud. Pick ONE - AWS, Azure, or GCP - and go deep. Focus on IAM (Identity & Access Management), security groups, monitoring, and compliance. AWS is the most in-demand for security roles in India.',
      topics: [
        'Cloud service models (IaaS, PaaS, SaaS) & Shared Responsibility',
        'AWS IAM policies, least privilege roles & MFA enforcement',
        'VPCs, subnets, Security Groups & Network Access Control Lists',
        'Logging with CloudTrail & monitoring with CloudWatch',
        'Storage security (S3 bucket hardening & encryption)'
      ],
      freeWebsites: [
        { title: 'AWS Free Tier + Official Training (Free)', url: 'https://aws.amazon.com/training/' },
        { title: 'AWS Cloud Quest - Gamified Labs (Free)', url: 'https://aws.amazon.com/training/digital/aws-cloud-quest/' },
        { title: 'Microsoft Learn Azure Fundamentals (Free)', url: 'https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/' },
        { title: 'Google Cloud Skills Boost (Free Tier)', url: 'https://www.cloudskillsboost.google/' }
      ],
      youtube: [
        { title: 'AWS Security Full Course - FreeCodeCamp', url: 'https://www.youtube.com/@freecodecamp' },
        { title: 'Azure Security Fundamentals - Microsoft', url: 'https://www.youtube.com/' }
      ],
      proTip: "Get the AWS Cloud Practitioner cert this week - it's free to study for, under $100 to sit, and immediately signals cloud awareness to hiring managers."
    },
    {
      id: 'step-9',
      number: '09',
      stepNumber: 'Step 9',
      title: 'Review and Hands-On Practice',
      targetCert: 'Hands-On Labs & Gap Reinforcement',
      summary: "This week is intentionally dedicated to review. Go back to your weakest area - likely Linux or Python - and reinforce it. Do labs. Revisit concepts that didn't click. Don't rush past this. The people who skip catch-up weeks are the ones who struggle in interviews.",
      topics: [
        'Revisiting Linux shell commands & solving permission issues',
        'Writing end-to-end Python scripts without looking at tutorials',
        'Hands-on Blue Team alert triage scenarios',
        'Solving beginner Capture The Flag (CTF) security challenges',
        'Consolidating notes into personal cheat sheets'
      ],
      freeWebsites: [
        { title: 'TryHackMe Free Learning Paths', url: 'https://tryhackme.com/' },
        { title: 'CyberDefenders Blue Team Labs (Free)', url: 'https://cyberdefenders.org/' },
        { title: 'PicoCTF Practice Challenges (Free)', url: 'https://picoctf.org/' }
      ],
      youtube: [
        { title: 'NetworkChuck Full Hacking Course Playlist', url: 'https://www.youtube.com/@NetworkChuck' }
      ],
      proTip: "Track exactly where you spend time this week. If you're avoiding a topic, that's the topic you need to spend time on."
    },
    {
      id: 'step-10',
      number: '10',
      stepNumber: 'Step 10',
      title: 'Ethical Hacking in Authorized Labs',
      targetCert: 'Penetration Testing in Scoped Labs',
      summary: 'The most exciting week. Apply everything you’ve learned to actually break into systems - legally. HackTheBox and Vulnhub give you deliberately vulnerable machines to practice on. Document every step. These writeups become your portfolio pieces and interview talking points.',
      topics: [
        'Reconnaissance, Nmap port scanning & service enumeration',
        'Web exploit identification: OWASP Top 10 vulnerabilities',
        'Privilege escalation basics on Linux and Windows targets',
        'Authoring professional technical writeups and remediation notes',
        'Strict ethical boundaries and legal authorizations'
      ],
      freeWebsites: [
        { title: 'HackTheBox - Free Machines (Free)', url: 'https://www.hackthebox.com/' },
        { title: 'Vulnhub - Vulnerable VMs (Free)', url: 'https://www.vulnhub.com/' },
        { title: 'TryHackMe Offensive Path (Free Tier)', url: 'https://tryhackme.com/' },
        { title: 'OWASP Top 10 (Free Documentation)', url: 'https://owasp.org/www-project-top-ten/' }
      ],
      youtube: [
        { title: 'Ethical Hacking Full Course Part 1 - TheCyberMentor', url: 'https://www.youtube.com/@TCMDoctor' },
        { title: 'Ethical Hacking Full Course Part 2 - TheCyberMentor', url: 'https://www.youtube.com/@TCMDoctor' },
        { title: 'John Hammond CTF Walkthroughs (YouTube)', url: 'https://www.youtube.com/@_JohnHammond' }
      ],
      proTip: 'Write up every HackTheBox machine you solve. Post it on your blog or GitHub. These are the stories you’ll tell in interviews. Important: Only practice on machines and labs you are authorized to test.'
    },
    {
      id: 'step-11',
      number: '11',
      stepNumber: 'Step 11',
      title: 'Build Your Cybersecurity Resume',
      targetCert: 'Job-Ready Technical Resume',
      summary: 'Two days to build your one-page cybersecurity resume. Include: certifications earned, tools used (Wireshark, Nmap, ELK, Python), GitHub link with your projects, and any CTF competitions entered. A tailored one-page resume beats a 3-page generic one every time.',
      topics: [
        'Structuring a one-page technical cybersecurity resume',
        'Action verbs and quantifiable technical bullet points',
        'Highlighting practical homelabs, Git projects & CTF rankings',
        'Listing core competencies: Wireshark, Nmap, ELK, Python, SIEM',
        'ATS formatting guidelines and clean layout design'
      ],
      freeWebsites: [
        { title: 'BowTiedCyber Resume Template (Free)', url: 'https://bowtiedcyber.com/' },
        { title: 'Indeed Cybersecurity Resume Guide (Free)', url: 'https://www.indeed.com/' },
        { title: 'Resume.io Free Template', url: 'https://resume.io/' }
      ],
      youtube: [],
      proTip: 'Your resume should have: 1 GitHub link, 1 certification, 3+ tools listed under skills, and 2+ projects described with impact. If you can’t fill those four things, spend Day 91 filling the gaps.'
    },
    {
      id: 'step-12',
      number: '12',
      stepNumber: 'Step 12',
      title: 'Apply for Entry-Level Roles',
      targetCert: 'Career Launch & Networking',
      summary: 'Where to apply, how to apply, and what to say. Target SOC Analyst Level 1, IT Security Analyst, Junior Penetration Tester, and Cybersecurity Associate roles. Don’t apply to 200 jobs blindly - apply to 20 with personalized cover letters and real prep for each.',
      topics: [
        'Targeting entry-level roles: SOC Analyst L1, IT Security Analyst',
        'Strategic outreach & networking on LinkedIn with practitioners',
        'Customizing applications with specific portfolio project callouts',
        'Preparing for technical interview questions (TCP/IP, incident scenarios)',
        'Building a daily job application and practice routine'
      ],
      freeWebsites: [
        { title: 'LinkedIn Jobs - Cybersecurity Filter', url: 'https://www.linkedin.com/jobs/cybersecurity-jobs/' },
        { title: 'Indeed Cybersecurity Jobs India', url: 'https://in.indeed.com/' },
        { title: 'Naukri.com Cybersecurity Jobs', url: 'https://www.naukri.com/cyber-security-jobs' },
        { title: 'Instahyre - India Tech Jobs', url: 'https://www.instahyre.com/' }
      ],
      youtube: [],
      proTip: 'Message 5 cybersecurity professionals on LinkedIn every week asking for a 15-minute call. Not asking for a job - asking to learn. This works better than 100 cold applications.'
    }
  ];

  /* ==========================================================================
     APPLICATION STATE & ROUTER
     ========================================================================== */

  let currentCategoryFilter = 'ALL';
  let searchQuery = '';

  let scrollSpyActive = false;
  let scrollSpyTicking = false;
  let isNavClickScrolling = false;
  let navClickTimer = null;

  function initRouter() {
    window.addEventListener('hashchange', handleRoute);
    window.addEventListener('DOMContentLoaded', () => {
      setupGlobalListeners();
      handleRoute();
    });
  }

  function updateHeaderNav(path) {
    const headerNavMenu = document.getElementById('headerNavMenu');
    const headerActions = document.getElementById('headerActions');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const subtitle = document.querySelector('.brand-subtitle');

    if (subtitle) {
      subtitle.textContent = (path.startsWith('academy')) ? 'NAVA Cybersecurity Academy' : 'Security · Innovation · Education';
    }

    // Clear obsolete header navigation links - navigation belongs strictly in bottom dock
    if (headerNavMenu) {
      headerNavMenu.innerHTML = '';
      headerNavMenu.style.display = 'none';
    }

    // Header actions: strictly theme toggle button only
    if (headerActions) {
      const isDark = document.body.classList.contains('dark-theme');
      headerActions.innerHTML = `
        <button id="theme-toggle" class="theme-btn" aria-label="Toggle Theme" title="Toggle Theme">
          <i class="${isDark ? 'ri-sun-line' : 'ri-moon-line'}"></i>
        </button>
      `;
      bindThemeToggle();
    }

    // Clear obsolete mobile drawer
    if (mobileDrawer) {
      mobileDrawer.innerHTML = '';
      mobileDrawer.style.display = 'none';
    }
  }

  function bindMobileToggle() {
    // No-op: header hamburger toggle removed in favor of bottom dock
  }

  function scrollToSection(sectionId) {
    isNavClickScrolling = true;
    clearTimeout(navClickTimer);
    highlightNavLink(sectionId);

    const performScroll = (retries = 0) => {
      const el = document.getElementById(sectionId);
      if (el) {
        const headerOffset = 84;
        const rect = el.getBoundingClientRect();
        const targetY = rect.top + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: Math.max(0, targetY),
          behavior: 'smooth'
        });
        navClickTimer = setTimeout(() => {
          isNavClickScrolling = false;
          updateScrollSpyPosition();
        }, 800);
      } else if (retries < 6) {
        setTimeout(() => performScroll(retries + 1), 50);
      } else {
        isNavClickScrolling = false;
      }
    };
    requestAnimationFrame(() => performScroll(0));
  }

  function handleRoute() {
    const rawHash = window.location.hash.slice(1) || 'home';
    const [pathPart, queryPart] = rawHash.split('?');
    const path = pathPart.toLowerCase();
    const queryParams = new URLSearchParams(queryPart || '');

    const appRoot = document.getElementById('app');
    if (!appRoot) return;

    // Dynamically adjust header navigation (Main Site vs Academy)
    updateHeaderNav(path);

    // Close mobile menu if open
    closeMobileMenu();

    // Section scroll anchors on homepage
    const homeSections = ['about-section', 'services-section', 'projects-section', 'contact-section'];
    const isSectionAnchor = homeSections.includes(path);

    if (path === '' || path === 'home' || isSectionAnchor) {
      document.title = 'NAVA Cyber Solutions | Cybersecurity Services, Testing & Education';
      
      const isHomeRendered = document.getElementById('hero') !== null;
      if (!isHomeRendered) {
        appRoot.innerHTML = renderHomePage();
        initHeroDemo();
        initContactForm(queryParams);
        initHeroVideoLoop();
      }

      if (isSectionAnchor) {
        scrollToSection(path);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
      updateActiveNav(path);
      initScrollSpy();
      return;
    }

    // Dedicated Full Pages & Detail Views
    if (path === 'about' || path === 'about-detail') {
      document.title = 'About Us - NAVA Cyber Solutions';
      appRoot.innerHTML = renderAboutPage();
    } else if (path === 'services') {
      window.location.hash = '#services-section';
      return;
    } else if (path.startsWith('service/')) {
      const serviceId = path.split('/')[1];
      const service = SERVICES.find(s => s.id === serviceId);
      if (service) {
        document.title = `${service.title} - NAVA Cyber Solutions`;
        appRoot.innerHTML = renderServiceDetailPage(service);
      } else {
        renderNotFoundPage(appRoot);
      }
    } else if (path === 'projects') {
      window.location.hash = '#projects-section';
      return;
    } else if (path === 'project/guess-proof-ai') {
      document.title = 'Case Study: Guess Proof AI - NAVA Cyber Solutions';
      appRoot.innerHTML = renderGuessProofCaseStudyPage();
      initHeroDemo();
    } else if (path === 'academy' || path === 'academy/home' || path === 'academy/about' || path === 'academy-about' || path === 'academy-portal') {
      document.title = 'About Academy - NAVA Cyber Solutions';
      appRoot.innerHTML = renderAboutAcademyPage();
      initHeroVideoLoop();
    } else if (path === 'academy/resources' || path === 'academy-resources') {
      document.title = 'Free Resources: Beginner Roadmap - NAVA Cyber Solutions';
      appRoot.innerHTML = renderFreeResourcesPage();
    } else if (path === 'academy/courses' || path === 'academy-courses') {
      document.title = 'Courses - NAVA Cyber Solutions Academy';
      appRoot.innerHTML = renderCoursesPage();
    } else if (path === 'academy/events' || path === 'academy-events') {
      document.title = 'Events & Workshops - NAVA Cyber Solutions';
      appRoot.innerHTML = renderEventsWorkshopsPage();
    } else if (path === 'academy/certifications' || path === 'academy-certifications') {
      document.title = 'Workshop Certifications - NAVA Cyber Solutions';
      appRoot.innerHTML = renderCertificationsPage();
    } else if (path === 'coming-soon' || path === 'academy/certifications/coming-soon') {
      document.title = 'Workshop Certificates Coming Soon - NAVA Cyber Solutions';
      appRoot.innerHTML = renderComingSoonView();
    } else if (path.startsWith('academy/')) {
      document.title = 'About Academy - NAVA Cyber Solutions';
      appRoot.innerHTML = renderAboutAcademyPage();
      initHeroVideoLoop();
    } else if (path === 'contact') {
      window.location.hash = '#contact-section';
      return;
    } else if (path === 'privacy') {
      document.title = 'Privacy Policy - NAVA Cyber Solutions';
      appRoot.innerHTML = renderPrivacyPage();
    } else if (path === 'terms') {
      document.title = 'Terms of Service - NAVA Cyber Solutions';
      appRoot.innerHTML = renderTermsPage();
    } else {
      renderNotFoundPage(appRoot);
    }

    // Scroll window smoothly to top for full page views
    window.scrollTo({ top: 0, behavior: 'instant' });
    updateActiveNav(path);
    destroyScrollSpy();
  }

  function renderNotFoundPage(container) {
    document.title = '404 Page Not Found - NAVA Cyber Solutions';
    container.innerHTML = `
      <section class="section section-white" style="min-height: 70vh; display: grid; place-items: center;">
        <div class="container-narrow text-center">
          <div class="eyebrow">404 Error</div>
          <h1 class="section-title">Page Not Found</h1>
          <p class="section-description" style="margin-bottom: 32px;">
            The requested destination does not exist or has been relocated.
          </p>
          <a href="#home" class="btn btn-primary">Return to Homepage</a>
        </div>
      </section>
    `;
  }

  /* ==========================================================================
     TEMPLATE GENERATORS
     ========================================================================== */

  function renderHomePage() {
    return `
      <!-- Hero Section -->
      <section class="hero-section" id="hero">
        <div class="container hero-grid">
          <div class="hero-content">
            <div class="eyebrow">Cybersecurity · Education · Innovation</div>
            <h1 class="hero-headline">
              Building a More Secure Digital Future.
              <span class="highlight-dim">Secure Today. Stronger Tomorrow.</span>
            </h1>
            <p class="hero-lead">
              NAVA Cyber Solutions brings together cybersecurity, secure technology development, and intelligent digital solutions to help build safer and smarter digital experiences.
            </p>
            <div class="hero-actions">
              <a href="#services-section" class="btn btn-primary">
                Explore Our Services <span class="btn-icon">${ICONS.arrowRight}</span>
              </a>
              <a href="#projects-section" class="btn btn-secondary">
                View Our Projects
              </a>
              <a href="#academy" class="hero-tertiary">
                Explore the Academy <span class="btn-icon">${ICONS.arrowRight}</span>
              </a>
            </div>
            <div class="hero-trust-chips">
              <div class="trust-chip">${ICONS.check} Security-Minded Development</div>
              <div class="trust-chip">${ICONS.check} Permission-Based Testing</div>
              <div class="trust-chip">${ICONS.check} Responsible Technology</div>
            </div>
          </div>
          <div class="hero-video-wrapper" aria-label="NAVA Cyber Solutions Video">
            <video 
              id="heroBrandVideo" 
              class="hero-brand-video" 
              autoplay 
              loop 
              muted 
              playsinline 
              preload="auto"
              poster="assets/logos/nava-logo.png"
              aria-label="NAVA Cyber Solutions Loop Video"
            >
              <source src="assets/videos/hero-video.mp4" type="video/mp4">
              <source src="gemini_generated_video_6cd83e58.mp4" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
      </section>

      <!-- Trust & Commitment Bar -->
      <div class="commitments-bar">
        <div class="container commitments-grid">
          <div class="commitment-item">
            <div class="commitment-icon">${ICONS.shield}</div>
            <div class="commitment-text">
              <h4>Scoped Security Services</h4>
              <p>Strictly authorized, permission-based assessments.</p>
            </div>
          </div>
          <div class="commitment-item">
            <div class="commitment-icon">${ICONS.cpu}</div>
            <div class="commitment-text">
              <h4>Practical Innovations</h4>
              <p>Tools designed to solve real security friction.</p>
            </div>
          </div>
          <div class="commitment-item">
            <div class="commitment-icon">${ICONS.book}</div>
            <div class="commitment-text">
              <h4>Open Cybersecurity Education</h4>
              <p>Foundations and safe practical guidance.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Introduction to NAVA Cyber Solutions -->
      <section class="section section-white" id="about-section">
        <div class="container about-summary-grid">
          <div>
            <div class="eyebrow">Our Mission & Identity</div>
            <h2 class="section-title">Technology with purpose. Security with integrity.</h2>
          </div>
          <div class="about-summary-content">
            <p>
              NAVA Cyber Solutions is a modern cybersecurity and digital technology initiative dedicated to making cybersecurity practical, transparent, and resilient.
            </p>
            <p>
              We believe that true security is not achieved through fear or impenetrable jargon, but through responsible engineering, sound architectural fundamentals, and continuous education.
            </p>
            <div class="values-pill-grid">
              <div class="value-pill-card">
                <div class="value-pill-icon">${ICONS.shield}</div>
                <div>
                  <h5>Security-Minded</h5>
                  <p>Defensive architecture embedded from the first line of code.</p>
                </div>
              </div>
              <div class="value-pill-card">
                <div class="value-pill-icon">${ICONS.lock}</div>
                <div>
                  <h5>Responsible Tech</h5>
                  <p>Zero-knowledge practices protecting user data and confidentiality.</p>
                </div>
              </div>
              <div class="value-pill-card">
                <div class="value-pill-icon">${ICONS.search}</div>
                <div>
                  <h5>Practical Problem-Solving</h5>
                  <p>Transparent recommendations prioritized by realistic risk impact.</p>
                </div>
              </div>
              <div class="value-pill-card">
                <div class="value-pill-icon">${ICONS.book}</div>
                <div>
                  <h5>Continuous Learning</h5>
                  <p>Empowering teams and individuals through clear knowledge sharing.</p>
                </div>
              </div>
            </div>
            <a href="#about-detail" class="text-action-link" style="display: inline-flex; margin-top: 18px;">
              Learn more about our philosophy, founder & mission <span>${ICONS.arrowRight}</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Services Preview Section -->
      <section class="section section-soft" id="services-section">
        <div class="container">
          <div class="section-header">
            <div class="eyebrow">Planned Services</div>
            <h2 class="section-title">Comprehensive Security & Engineering Capabilities</h2>
            <p class="section-description">
              Carefully designed services to help companies identify risks, harden critical infrastructure, and build resilient digital products.
            </p>
          </div>
          <div class="services-grid">
            ${SERVICES.map(s => renderServiceCard(s)).join('')}
          </div>
        </div>
      </section>

      <!-- Featured Project: Guess Proof AI -->
      <section class="section section-white" id="projects-section">
        <div class="container">
          <div class="section-header text-left">
            <div class="eyebrow">Featured Project</div>
            <h2 class="section-title">Demonstrated Innovation in Action</h2>
          </div>
          <div class="featured-project-container">
            <div class="project-details-pane">
              <span class="badge badge-gold" style="width: fit-content; margin-bottom: 12px;">Active Application</span>
              <h3 class="project-headline">Guess Proof AI</h3>
              <p class="project-summary">
                A browser-focused cybersecurity intelligence tool designed to analyze password risk patterns, keyboard walk sequences, and dictionary predictability. Built with strict client-side privacy.
              </p>
              <div class="project-tags">
                <span class="badge badge-neutral">Client-Side Heuristics</span>
                <span class="badge badge-neutral">Privacy-by-Design</span>
                <span class="badge badge-neutral">Modern Web App</span>
              </div>
              <div class="project-actions">
                <a href="#project/guess-proof-ai" class="btn btn-primary">
                  About the Project <span class="btn-icon">${ICONS.arrowRight}</span>
                </a>
                <a href="https://guess-proof-ai.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                  Open Application <span class="btn-icon">${ICONS.externalLink}</span>
                </a>
              </div>
            </div>
            <div class="project-visual-pane">
              ${renderInteractiveDemoWidget()}
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose NAVA Section -->
      <section class="section section-soft">
        <div class="container">
          <div class="section-header">
            <div class="eyebrow">Why NAVA Cyber Solutions</div>
            <h2 class="section-title">Built on Uncompromising Principles</h2>
            <p class="section-description">
              How we approach every security challenge, client relationship, and engineering problem.
            </p>
          </div>
          <div class="values-pill-grid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="value-pill-card">
              <div class="value-pill-icon">${ICONS.shield}</div>
              <div>
                <h5>Security-Conscious Thinking</h5>
                <p>Proactive risk mitigation rather than reactive panic patching.</p>
              </div>
            </div>
            <div class="value-pill-card">
              <div class="value-pill-icon">${ICONS.code}</div>
              <div>
                <h5>Practical Implementation</h5>
                <p>Deliverables that real engineering teams can immediately adopt.</p>
              </div>
            </div>
            <div class="value-pill-card">
              <div class="value-pill-icon">${ICONS.lock}</div>
              <div>
                <h5>Responsible Development</h5>
                <p>Strict boundaries, zero unauthorized testing, and verified integrity.</p>
              </div>
            </div>
            <div class="value-pill-card">
              <div class="value-pill-icon">${ICONS.globe}</div>
              <div>
                <h5>Clear Communication</h5>
                <p>No vague jargon. Transparent risk levels and honest evaluations.</p>
              </div>
            </div>
            <div class="value-pill-card">
              <div class="value-pill-icon">${ICONS.cpu}</div>
              <div>
                <h5>Continuous Improvement</h5>
                <p>Staying ahead of emerging vulnerabilities with modern methodologies.</p>
              </div>
            </div>
            <div class="value-pill-card">
              <div class="value-pill-icon">${ICONS.check}</div>
              <div>
                <h5>User-Focused Experience</h5>
                <p>Security that empowers legitimate users instead of hindering them.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Academy Preview Band -->
      <section class="section section-white">
        <div class="container">
          <div class="academy-banner">
            <div class="academy-banner-grid">
              <div>
                <div class="eyebrow" style="color: var(--color-gold-light);">Cybersecurity Academy</div>
                <h2>Democratizing Cybersecurity Knowledge.</h2>
                <p>
                  Explore beginner to intermediate learning guides, networking fundamentals, secure coding principles, and practical security insights.
                </p>
                <a href="#academy" class="btn btn-gold">
                  Explore Academy <span class="btn-icon">${ICONS.arrowRight}</span>
                </a>
              </div>
              <div class="academy-features-list">
                <div class="academy-feature-box">
                  <b>Web Security</b>
                  <span>OWASP Top 10 Defense</span>
                </div>
                <div class="academy-feature-box">
                  <b>Networking</b>
                  <span>Packet & Protocol Analysis</span>
                </div>
                <div class="academy-feature-box">
                  <b>Secure Coding</b>
                  <span>Resilient Architecture</span>
                </div>
                <div class="academy-feature-box">
                  <b>Ethics & Law</b>
                  <span>Permission-Based Frameworks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="section section-soft" id="contact-section">
        <div class="container">
          <div class="section-header">
            <div class="eyebrow">Get In Touch</div>
            <h2 class="section-title">Have a project or security challenge in mind?</h2>
            <p class="section-description">
              Let’s discuss your requirements and explore a practical, secure approach tailored to your systems.
            </p>
          </div>
          <div class="contact-container" style="margin-top: 36px;">
            <div class="contact-info-pane">
              <div class="eyebrow">Connect With Us</div>
              <h2>Let’s make your digital systems safer.</h2>
              <p>
                Have questions about our cybersecurity reviews, secure software development, or Academy initiatives? Share your requirements and let's explore a practical solution.
              </p>

              <div class="contact-channels">
                <div class="channel-card">
                  <div class="channel-icon">${ICONS.mail}</div>
                  <div class="channel-details">
                    <small>Official Email</small>
                    <strong>navagroup.official@gmail.com</strong>
                    <div class="channel-notice" style="font-style: normal; color: var(--color-text-secondary);">Direct inquiries, cybersecurity consultations & academy support.</div>
                  </div>
                </div>

                <div class="channel-card">
                  <div class="channel-icon">${ICONS.phone}</div>
                  <div class="channel-details">
                    <small>Phone & Consultation</small>
                    <strong>Direct Inquiries & Call Support</strong>
                    <div class="channel-notice" style="font-style: normal; color: var(--color-text-secondary);">Direct phone consultations scheduled via navagroup.official@gmail.com</div>
                  </div>
                </div>

                <div class="channel-card">
                  <div class="channel-icon">${ICONS.shield}</div>
                  <div class="channel-details">
                    <small>Founder & Leadership</small>
                    <strong>ABHIRAM ALLADA - Founder</strong>
                    <div class="channel-notice" style="font-style: normal; color: var(--color-text-secondary);">NAVA Cyber Solutions</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="contact-form-card">
              <div class="demo-disclaimer-box">
                <strong>Inquiry Notice:</strong> Share your requirements below to schedule a cybersecurity review, development consultation, or workshop inquiry.
              </div>

              <form id="contactForm" novalidate>
                <div class="form-grid">
                  <div class="form-group">
                    <label for="contactName" class="form-label">Full Name <span class="required">*</span></label>
                    <input type="text" id="contactName" class="form-control" placeholder="Your Name" required />
                    <span class="field-error" id="nameError">Please enter your full name.</span>
                  </div>

                  <div class="form-group">
                    <label for="contactPhone" class="form-label">Phone Number (Optional)</label>
                    <input type="tel" id="contactPhone" class="form-control" placeholder="+91 XXXXX XXXXX" />
                  </div>

                  <div class="form-group col-span-2">
                    <label for="contactEmail" class="form-label">Email Address <span class="required">*</span></label>
                    <input type="email" id="contactEmail" class="form-control" placeholder="you@domain.com" required />
                    <span class="field-error" id="emailError">Please provide a valid email address.</span>
                  </div>

                  <div class="form-group col-span-2">
                    <label for="contactService" class="form-label">Service or Topic Required</label>
                    <select id="contactService" class="form-control">
                      <option value="General Inquiry">General Inquiry / Information</option>
                      <option value="cybersecurity-consulting">Cybersecurity Consulting</option>
                      <option value="web-app-security">Web Application Security</option>
                      <option value="secure-web-dev">Secure Web Development</option>
                      <option value="vulnerability-assessment">Security Testing & Vulnerability Assessment</option>
                      <option value="ai-solutions">AI-Powered Solutions (Guess Proof AI)</option>
                      <option value="technical-consulting">Technical Consulting & Digital Solutions</option>
                      <option value="academy">Academy Workshops & Education</option>
                    </select>
                  </div>

                  <div class="form-group col-span-2">
                    <label for="contactSubject" class="form-label">Subject</label>
                    <input type="text" id="contactSubject" class="form-control" placeholder="Brief summary of your inquiry" />
                  </div>

                  <div class="form-group col-span-2">
                    <label for="contactMessage" class="form-label">Message <span class="required">*</span></label>
                    <textarea id="contactMessage" class="form-control" placeholder="Please describe your requirements, project scope, or questions..." required></textarea>
                    <span class="field-error" id="messageError">Please enter a message (minimum 10 characters).</span>
                  </div>

                  <div class="form-group col-span-2">
                    <label class="consent-label">
                      <input type="checkbox" id="contactConsent" class="consent-checkbox" required />
                      <span>I agree to have NAVA Cyber Solutions process my submitted details for the purpose of answering this inquiry. <span class="required">*</span></span>
                    </label>
                    <span class="field-error" id="consentError">You must agree before submitting.</span>
                  </div>

                  <div class="form-group col-span-2">
                    <button type="submit" id="contactSubmitBtn" class="btn btn-primary" style="width: 100%;">
                      Send Message <span class="btn-icon">${ICONS.arrowRight}</span>
                    </button>
                  </div>
                </div>

                <div id="formStatusAlert" class="form-status-alert"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderServiceCard(service) {
    return `
      <article class="service-card">
        <div class="service-icon-box">${ICONS[service.icon] || ICONS.shield}</div>
        <h3 class="service-card-title">${service.title}</h3>
        <p class="service-card-desc">${service.shortDesc}</p>
        <div class="service-card-footer">
          <a href="#service/${service.id}" class="text-action-link">
            Learn More <span class="btn-icon">${ICONS.arrowRight}</span>
          </a>
        </div>
      </article>
    `;
  }

  function renderInteractiveDemoWidget() {
    return `
      <div class="interactive-demo-card">
        <div class="window-header">
          <div class="window-dots">
            <span></span><span></span><span></span>
          </div>
          <div class="window-title">Guess Proof AI - Heuristic Inspector</div>
        </div>
        <div class="demo-inner">
          <div class="demo-brand">Client-Side Analysis Engine</div>
          <h4 class="demo-title">Test Password Patterns</h4>
          <div class="demo-input-group">
            <input 
              type="text" 
              id="demoPasswordInput" 
              class="demo-input" 
              placeholder="e.g. Tr0ub4dor&3 or password123" 
              value="NavaSecurity2026!"
              autocomplete="off"
              spellcheck="false"
            />
          </div>
          <div class="demo-meter-track">
            <div id="demoMeterBar" class="demo-meter-bar" style="width: 75%; background-color: #10B981;"></div>
          </div>
          <div class="demo-meter-info">
            <span id="demoRiskRating">Risk Level: <strong>Low</strong></span>
            <span id="demoEntropyScore">Entropy: ~78 bits</span>
          </div>
          <div class="demo-heuristics">
            <span>Detected Heuristics:</span>
            <p id="demoHeuristicNote" style="margin: 0; font-size: 0.75rem;">
              Good diversity: mix of cases, digits, and special characters. No common sequential keyboard walk detected.
            </p>
          </div>
        </div>
      </div>
    `;
  }

  function renderAboutPage() {
    return `
      <section class="section section-white">
        <div class="container">
          <div class="breadcrumbs">
            <a href="#home">Home</a> <span>/</span> About Us
          </div>
          <div class="detail-layout-grid">
            <article class="detail-main-article">
              <div class="eyebrow">About NAVA Cyber Solutions</div>
              <h1 class="section-title">Security with Responsibility. Innovation with Purpose.</h1>
              
              <p>
                NAVA Cyber Solutions was established with a clear mandate: to help organizations and individuals navigate the expanding threat landscape with practical clarity, sound architectural principles, and responsible engineering.
              </p>
              
              <h2>Our Mission</h2>
              <p>
                To deliver dependable cybersecurity guidance, resilient digital software, and accessible technical education that empower clients to operate with confidence in an increasingly complex digital world.
              </p>

              <h2>Our Vision</h2>
              <p>
                To build an internationally recognized standard of cybersecurity excellence that bridges the divide between cutting-edge security research and practical day-to-day software development.
              </p>

              <h2>Core Principles</h2>
              <ul>
                <li><strong>Ethical Accountability:</strong> We exclusively conduct authorized, scoped evaluations with explicit written consent.</li>
                <li><strong>Privacy by Default:</strong> We build client tools-like Guess Proof AI-with zero-knowledge architectures where sensitive user data never leaves the client's device.</li>
                <li><strong>Empirical Honesty:</strong> We provide unvarnished, factual assessments without alarmism or inflated claims.</li>
                <li><strong>Educational Empowerment:</strong> Security is most resilient when teams understand <em>why</em> vulnerabilities emerge and how defensive patterns stop them.</li>
              </ul>

              <h2>Our Approach to Software Development</h2>
              <p>
                Traditional development treats security as an afterthought-a compliance checklist audited just before deployment. At NAVA Cyber Solutions, security is integrated directly into the initial wireframe, database schema, and interface design. This proactive posture minimizes technical debt and drastically curtails potential attack surfaces.
              </p>

              <!-- Founder Section -->
              <div class="founder-card">
                <div class="founder-avatar">AA</div>
                <div class="founder-info">
                  <h4>ABHIRAM ALLADA</h4>
                  <div class="founder-role">Founder - NAVA Cyber Solutions</div>
                  <p>
                    Leading the strategic vision, cybersecurity engineering, and digital initiatives of NAVA Cyber Solutions. Focused on developing responsible cybersecurity architectures, practical AI applications, and accessible technology education.
                  </p>
                </div>
              </div>
            </article>

            <aside class="detail-sidebar">
              <div class="sidebar-card">
                <h3>Our Capabilities</h3>
                <p>From web application audits to custom AI-assisted security tools, explore what we build.</p>
                <a href="#services" class="btn btn-primary" style="width: 100%;">Explore Services</a>
              </div>
              <div class="sidebar-card">
                <h3>Featured Work</h3>
                <p>Read our technical case study on Guess Proof AI and its zero-knowledge analysis model.</p>
                <a href="#project/guess-proof-ai" class="btn btn-secondary" style="width: 100%;">View Case Study</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    `;
  }

  function renderServicesPage() {
    return `
      <section class="section section-soft">
        <div class="container">
          <div class="breadcrumbs">
            <a href="#home">Home</a> <span>/</span> Services
          </div>
          <div class="section-header">
            <div class="eyebrow">Our Capabilities</div>
            <h1 class="section-title">Specialized Services & Technical Offerings</h1>
            <p class="section-description">
              Every service is delivered within a rigorously defined scope with transparent deliverables and zero unauthorized actions.
            </p>
          </div>
          <div class="services-grid">
            ${SERVICES.map(s => renderServiceCard(s)).join('')}
          </div>
        </div>
      </section>
    `;
  }

  function renderServiceDetailPage(service) {
    return `
      <section class="section section-white">
        <div class="container">
          <div class="breadcrumbs">
            <a href="#home">Home</a> <span>/</span> <a href="#services">Services</a> <span>/</span> ${service.title}
          </div>
          <div class="detail-layout-grid">
            <article class="detail-main-article">
              <div class="eyebrow">Service Scope</div>
              <h1 class="section-title">${service.title}</h1>
              <p class="section-description" style="margin-bottom: 28px;">${service.overview}</p>

              <h2>Potential Use Cases</h2>
              <ul>
                ${service.useCases.map(u => `<li>${u}</li>`).join('')}
              </ul>

              <h2>Standard Deliverables</h2>
              <ul>
                ${service.deliverables.map(d => `<li>${d}</li>`).join('')}
              </ul>

              <h2>Responsible Engagement Standards</h2>
              <p>
                All assessment and advisory activities are subject to mutually executed scopes of work and explicit written authorization. NAVA Cyber Solutions never engages in unauthorized testing or security assessments without defined boundaries.
              </p>
            </article>

            <aside class="detail-sidebar">
              <div class="sidebar-card">
                <h3>Discuss This Service</h3>
                <p>Contact us to discuss your requirements, system boundaries, and project timelines.</p>
                <a href="#contact?service=${encodeURIComponent(service.id)}" class="btn btn-primary" style="width: 100%; margin-bottom: 12px;">
                  Request Consultation
                </a>
                <a href="#services" class="btn btn-secondary" style="width: 100%;">
                  Back to All Services
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    `;
  }

  function renderProjectsPage() {
    return `
      <section class="section section-soft">
        <div class="container">
          <div class="breadcrumbs">
            <a href="#home">Home</a> <span>/</span> Projects
          </div>
          <div class="section-header">
            <div class="eyebrow">Portfolio</div>
            <h1 class="section-title">Projects & Technical Case Studies</h1>
            <p class="section-description">
              Real applications and digital experiments solving concrete security and technology challenges.
            </p>
          </div>

          <!-- Featured Project Card -->
          <div class="featured-project-container" style="margin-bottom: 48px;">
            <div class="project-details-pane">
              <span class="badge badge-gold" style="width: fit-content; margin-bottom: 12px;">Primary Featured Project</span>
              <h2 class="project-headline">Guess Proof AI</h2>
              <p class="project-summary">
                An intelligent browser-based password risk analysis system. Examines keyboard patterns, common dictionary roots, and predictable structures entirely within the browser without transmitting user passwords.
              </p>
              <div class="project-tags">
                <span class="badge badge-neutral">Client-Side Heuristics</span>
                <span class="badge badge-neutral">Zero-Knowledge Design</span>
                <span class="badge badge-neutral">Live Application</span>
              </div>
              <div class="project-actions">
                <a href="#project/guess-proof-ai" class="btn btn-primary">
                  About the Project <span class="btn-icon">${ICONS.arrowRight}</span>
                </a>
                <a href="https://guess-proof-ai.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                  Open Application <span class="btn-icon">${ICONS.externalLink}</span>
                </a>
              </div>
            </div>
            <div class="project-visual-pane">
              ${renderInteractiveDemoWidget()}
            </div>
          </div>

          <!-- Reusable Project Grid & Roadmap -->
          <div class="section-header text-left" style="margin-top: 64px;">
            <div class="eyebrow">Roadmap & In-Development Initiatives</div>
            <h3 class="section-title" style="font-size: 2rem;">Planned Technical Projects</h3>
          </div>
          <div class="services-grid" style="grid-template-columns: repeat(2, 1fr);">
            <div class="service-card">
              <div class="service-icon-box">${ICONS.shield}</div>
              <h4 class="service-card-title">Cloud Sentinel Header Auditor</h4>
              <p class="service-card-desc">
                An automated analysis utility to inspect and recommend Content Security Policy (CSP), HSTS, and permissions policies for modern web deployments.
              </p>
              <span class="badge badge-neutral" style="width: fit-content;">In Architecture Phase</span>
            </div>
            <div class="service-card">
              <div class="service-icon-box">${ICONS.lock}</div>
              <h4 class="service-card-title">Zero-Trust Credential Vault</h4>
              <p class="service-card-desc">
                A localized cryptographic key-storage experiment leveraging WebCrypto APIs for secure client-side encryption.
              </p>
              <span class="badge badge-neutral" style="width: fit-content;">Research Prototype</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderGuessProofCaseStudyPage() {
    return `
      <section class="section section-white">
        <div class="container">
          <div class="breadcrumbs">
            <a href="#home">Home</a> <span>/</span> <a href="#projects">Projects</a> <span>/</span> Guess Proof AI
          </div>
          <div class="detail-layout-grid">
            <article class="detail-main-article">
              <div class="eyebrow">Case Study</div>
              <h1 class="section-title">Guess Proof AI: Re-thinking Password Risk Intelligence</h1>
              <p class="section-description">
                A technical exploration into client-side credential risk detection, heuristic pattern scoring, and privacy-first password evaluation.
              </p>

              <h2>Problem Statement</h2>
              <p>
                Most website password meters rely strictly on trivial length checks or character diversity rules (e.g. "at least 1 capital, 1 symbol"). As a result, passwords like <code>P@ssword123!</code> pass compliance checks with high scores despite taking brute-force or dictionary tools mere seconds to compromise. Traditional meters fail to identify keyboard walks (e.g. <code>qwerty</code>), date substitutions, or predictable root words.
              </p>

              <h2>Project Goals</h2>
              <ul>
                <li>Provide instantaneous, multi-dimensional feedback on predictable password structures.</li>
                <li>Execute 100% of the heuristic analysis in the user's browser-ensuring zero credential transmission over the network.</li>
                <li>Educate users on <em>why</em> specific patterns are vulnerable, guiding them toward true entropy.</li>
              </ul>

              <h2>Solution Overview & Architecture</h2>
              <p>
                Guess Proof AI evaluates inputs across multiple concurrent heuristics:
              </p>
              <ul>
                <li><strong>Spatial Keyboard Walks:</strong> Detects sequential adjacency across QWERTY keyboards (horizontal, diagonal, reverse).</li>
                <li><strong>Dictionary & Leetspeak Substitutions:</strong> Maps predictable symbol substitutions (e.g., <code>@</code> for <code>a</code>, <code>0</code> for <code>o</code>).</li>
                <li><strong>Repetition & Sequence Loops:</strong> Catches incremental numbers, repeated n-grams, and date strings.</li>
                <li><strong>Information-Theoretic Entropy:</strong> Calculates Shannon entropy with penalty reductions for discovered patterns.</li>
              </ul>

              <h2>Privacy & Zero-Knowledge Guarantee</h2>
              <p>
                Credentials are never logged, stored in LocalStorage, or dispatched to external servers. All cryptographic parsing and heuristic scoring are executed locally on the client's thread.
              </p>

              <h2>Verified Technology Stack</h2>
              <ul>
                <li><strong>Frontend:</strong> Modern Responsive Web Standards (HTML5, Vanilla CSS3, JavaScript ES6+).</li>
                <li><strong>Analysis Engine:</strong> Client-side heuristic calculation & regex entropy scoring.</li>
                <li><strong>Edge Hosting:</strong> Deployed on Vercel Edge Network for rapid global performance.</li>
              </ul>

              <div style="margin-top: 40px; display: flex; gap: 16px; flex-wrap: wrap;">
                <a href="https://guess-proof-ai.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                  Open Live Application <span class="btn-icon">${ICONS.externalLink}</span>
                </a>
                <a href="#projects" class="btn btn-secondary">
                  Back to Projects
                </a>
              </div>
            </article>

            <aside class="detail-sidebar">
              <div class="sidebar-card">
                <h3>Try the Heuristic Engine</h3>
                <p>Interact with the live algorithm prototype below:</p>
                ${renderInteractiveDemoWidget()}
              </div>
              <div class="sidebar-card">
                <h3>Live Deployment</h3>
                <p>Visit the full standalone production application:</p>
                <a href="https://guess-proof-ai.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%;">
                  Launch Guess Proof AI ↗
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    `;
  }

  function renderAcademySubnav(activeKey) {
    // Academy sections now use the dynamic header navigation bar directly
    return '';
  }

  function renderCoursesPage() {
    return `
      ${renderAcademySubnav('courses')}
      <section class="section section-soft" style="padding-top: 54px; min-height: 70vh; display: flex; align-items: center;">
        <div class="container text-center" style="max-width: 680px; margin: 0 auto;">
          <div class="breadcrumbs" style="justify-content: center; margin-bottom: 24px;">
            <a href="#home">Home</a> <span>/</span> <a href="#academy">Academy</a> <span>/</span> Courses
          </div>
          <div class="courses-coming-soon-card">
            <div style="width: 72px; height: 72px; margin: 0 auto 20px; border-radius: 50%; background: linear-gradient(135deg, rgba(16, 31, 59, 0.08) 0%, rgba(199, 166, 106, 0.16) 100%); border: 1.5px solid rgba(199, 166, 106, 0.4); display: grid; place-items: center;">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
            </div>
            <div class="eyebrow" style="margin-bottom: 10px;">NAVA Cybersecurity Academy</div>
            <h1 class="section-title" style="font-size: clamp(2rem, 3.5vw, 2.6rem); margin-bottom: 14px;">Courses Coming Soon</h1>
            <p style="font-size: 1.05rem; color: var(--secondary-color); line-height: 1.65; max-width: 520px; margin: 0 auto 28px;">
              Our comprehensive cybersecurity learning courses and practical defensive curriculum are currently under active development. Stay tuned for our upcoming launch.
            </p>
            <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
              <a href="#contact-section?service=academy" class="btn btn-primary">
                Get Notified on Launch <span class="btn-icon">${ICONS.arrowRight}</span>
              </a>
              <a href="#academy/resources" class="btn btn-secondary">
                Explore Free Beginner Roadmap
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderAcademyHomePage() {
    return `
      ${renderAcademySubnav('home')}
      <section class="section section-soft" style="padding-top: 54px;">
        <div class="container">
          <div class="breadcrumbs">
            <a href="#home">Home</a> <span>/</span> <a href="#academy">Academy</a> <span>/</span> Academy Home
          </div>
          <div class="section-header" style="margin-bottom: 48px;">
            <div class="eyebrow">NAVA Cybersecurity Academy</div>
            <h1 class="section-title">NAVA Cybersecurity Academy</h1>
            <p class="section-description">
              Explore cybersecurity learning paths, beginner-friendly resources, technical workshops, and educational materials designed for students, developers, and technology enthusiasts.
            </p>
          </div>

          <!-- Section A: Learning Courses - Coming Soon -->
          <div style="margin-bottom: 64px;">
            <div class="section-header text-left" style="margin-bottom: 28px;">
              <div class="eyebrow">Structured Curriculum</div>
              <h2 class="section-title" style="font-size: 2rem;">Learning Courses - Coming Soon</h2>
              <p class="section-description">
                Comprehensive technical courses currently under curriculum development. All seven courses below are coming soon.
              </p>
            </div>

            <div class="resources-grid">
              ${ACADEMY_RESOURCES.map(r => `
                <article class="resource-card">
                  <div class="resource-card-header">
                    <span class="resource-category">${r.category}</span>
                    <span class="badge badge-neutral">Coming Soon</span>
                  </div>
                  <h3 class="resource-title">${r.title}</h3>
                  <p class="resource-desc">${r.desc}</p>
                  <div class="resource-footer">
                    <span style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">${r.type}</span>
                    <span class="badge badge-neutral" style="padding: 6px 14px; font-size: 0.75rem; font-weight: 600;">Coming Soon</span>
                  </div>
                </article>
              `).join('')}
            </div>
          </div>

          <!-- Section B: Free Resources Preview -->
          <div style="margin-bottom: 48px;">
            <div class="featured-project-container" style="background: var(--color-white);">
              <div class="project-details-pane">
                <span class="badge badge-gold" style="width: fit-content; margin-bottom: 12px;">Free Beginner Resource</span>
                <h3 class="project-headline" style="font-size: 2.2rem;">Cybersecurity Roadmap for Beginners</h3>
                <p class="project-summary">
                  Start your cybersecurity journey with a 12-step practical learning roadmap from zero to job-ready, featuring completely free resources, interactive labs, and video courses.
                </p>
                <div class="project-actions">
                  <a href="#academy/resources" class="btn btn-primary">
                    Explore 12-Step Roadmap <span class="btn-icon">${ICONS.arrowRight}</span>
                  </a>
                </div>
              </div>
              <div class="project-visual-pane" style="background: radial-gradient(circle at 50% 50%, #EEF4FA, #F7F9FC);">
                <div style="background: var(--color-white); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 28px; width: 100%; max-width: 360px; box-shadow: var(--shadow-sm);">
                  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
                    <span class="stage-number-pill">12 STEPS</span>
                    <span style="font-size: 0.75rem; color: var(--color-text-secondary); font-weight: 600;">PRACTICAL PATHWAY</span>
                  </div>
                  <h4 style="font-size: 1.1rem; color: var(--color-navy-primary); margin-bottom: 10px;">Zero to Job-Ready</h4>
                  <p style="font-size: 0.8125rem; color: var(--color-text-secondary); line-height: 1.5; margin-bottom: 16px;">
                    Progress systematically from networking, Security+, Linux, and Python to Wireshark, ELK stack SIEM, cloud defense, and authorized ethical hacking.
                  </p>
                  <a href="#academy/resources" class="text-action-link" style="font-size: 0.8125rem;">
                    View Complete 12 Steps <span>${ICONS.arrowRight}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Section C & D: Events & Certifications Preview Grid -->
          <div class="cert-section-grid" style="margin-bottom: 0;">
            <!-- Section C: Events Preview -->
            <div class="cert-card">
              <div class="eyebrow" style="margin-bottom: 8px;">Community & Sessions</div>
              <h4>Events & Workshops</h4>
              <p>
                Hands-on technical workshops, live cyber defense labs, and hackathons organized by NAVA Cyber Solutions.
              </p>
              <div style="margin-top: auto;">
                <a href="#academy/events" class="text-action-link">
                  View Events & Workshops <span>${ICONS.arrowRight}</span>
                </a>
              </div>
            </div>

            <!-- Section D: Certifications Preview -->
            <div class="cert-card">
              <div class="eyebrow" style="margin-bottom: 8px;">Recognition & Pathways</div>
              <h4>Certifications & Downloads</h4>
              <p>
                Explore industry certification paths, exam objectives, and retrieve verified attendee credentials for completed NAVA sessions.
              </p>
              <div style="margin-top: auto;">
                <a href="#academy/certifications" class="text-action-link">
                  Explore Certifications <span>${ICONS.arrowRight}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    `;
  }

  function renderAboutAcademyPage() {
    return `
      ${renderAcademySubnav('about')}
      <section class="section section-white" style="padding-top: 54px;">
        <div class="container">
          <div class="breadcrumbs">
            <a href="#home">Home</a> <span>/</span> <a href="#academy">Academy</a> <span>/</span> About Academy
          </div>
          <div style="max-width: 960px; margin: 0 auto; width: 100%;">
            <article class="detail-main-article" style="width: 100%; max-width: 100%;">
              <div class="eyebrow">About the Academy</div>
              <h1 class="section-title">NAVA Cybersecurity Academy</h1>
              <p class="section-description">
                NAVA Cybersecurity Academy is a specialized cybersecurity education initiative founded by ABHIRAM ALLADA and powered by NAVA Cyber Solutions. We are dedicated to making practical digital defense knowledge accessible, structured, and actionable for learners at all levels.
              </p>

              <h2>What is NAVA Cybersecurity Academy?</h2>
              <p>
                NAVA Cybersecurity Academy is the educational wing of NAVA Cyber Solutions. It was established to provide clear, zero-cost, structured roadmaps and hands-on workshops that teach modern cybersecurity fundamentals. Instead of theoretical jargon or expensive commercial bootcamps, the Academy guides learners through real-world defense concepts, ethical testing workflows, and foundational computer science pillars.
              </p>

              <h2>What is Our Mission and Goal?</h2>
              <p>
                Our core mission is to <strong>democratize cybersecurity education</strong> and bridge the gap between theoretical academia and practical defensive engineering. Our goals include:
              </p>
              <ul>
                <li><strong>Demystify Digital Defense:</strong> Break complex networking, cryptography, and application security concepts into transparent, step-by-step milestones.</li>
                <li><strong>Eliminate Financial Barriers:</strong> Provide completely free, curated 12-step roadmaps utilizing vetted community tools, official documentation, and open practice labs.</li>
                <li><strong>Foster Responsible Defenders:</strong> Instill strict professional ethics, legal authorization discipline, and security-by-design principles from the very first lesson.</li>
              </ul>

              <h2>Why Choose NAVA Academy? (Why Us?)</h2>
              <p>
                With countless fragmented tutorials across the internet, NAVA Academy stands out by delivering a coherent, practitioner-led learning experience:
              </p>
              <ul>
                <li><strong>Built by Active Practitioners:</strong> Curated and maintained by developers and cybersecurity specialists under NAVA Cyber Solutions who work directly with modern web security and vulnerability analysis.</li>
                <li><strong>Practical & Hands-On First:</strong> We emphasize learning by doing - analyzing live packet captures in Wireshark, configuring Linux permissions, scripting in Python, and inspecting real web vulnerabilities.</li>
                <li><strong>Curated Zero-Cost Pathway:</strong> You do not need to spend thousands of dollars on paywalled courses. Our 12-stage roadmap connects you to the highest-quality free labs and resources available globally.</li>
                <li><strong>Strict Ethical Scoping:</strong> Every lesson reinforces legal boundaries, authorized testing protocols, and compliance standards necessary for enterprise careers.</li>
                <li><strong>Modern 2025-26 Relevance:</strong> Curriculum is regularly updated to reflect modern threat models, cloud security fundamentals (AWS/Azure/GCP), and OWASP Top 10 vulnerabilities.</li>
              </ul>

              <h2>What is the Practical Use and Real-World Value for You?</h2>
              <p>
                Whether you are aiming for a career in cybersecurity or want to build more secure software, NAVA Academy delivers tangible outcomes:
              </p>
              <ul>
                <li><strong>Career Preparation:</strong> Builds the exact technical baseline required for entry-level roles such as SOC Analyst (Tier 1), Junior Penetration Tester, Security Administrator, or AppSec Engineer.</li>
                <li><strong>Certification Groundwork:</strong> Establishes the foundational knowledge needed to succeed in industry certifications including CompTIA Security+, CEH, and eJPT.</li>
                <li><strong>Secure Software Engineering:</strong> Software developers learn to anticipate attacker methodologies, write secure code, and proactively prevent SQL injection, XSS, and broken access controls.</li>
                <li><strong>Personal & Enterprise Protection:</strong> Gain the knowledge to audit device configurations, identify phishing attempts, and harden personal and organizational digital infrastructure.</li>
              </ul>

              <h2>Who Can Learn at NAVA Academy?</h2>
              <p>
                Our curriculum is designed to be accessible and rewarding for:
              </p>
              <ul>
                <li><strong>Students & Absolute Beginners:</strong> Individuals taking their first steps in tech who want a structured, step-by-step guide from zero.</li>
                <li><strong>Software Developers:</strong> Programmers looking to master secure coding practices, API hardening, and vulnerability mitigation.</li>
                <li><strong>IT Administrators:</strong> System operators and network technicians seeking to transition into dedicated cybersecurity roles.</li>
                <li><strong>Security Enthusiasts:</strong> Anyone passionate about understanding digital defense, privacy protection, and ethical hacking.</li>
              </ul>

              <h2>Educational Code of Ethics & Responsible Practice</h2>
              <p>
                All cybersecurity knowledge, roadmaps, and lab materials provided by NAVA Cybersecurity Academy are intended strictly for educational, defensive, and authorized testing purposes. We hold an uncompromising standard: <strong>never assess, scan, or interact with any system, network, or application without explicit, documented permission.</strong>
              </p>
            </article>
          </div>
        </div>
      </section>
    `;
  }

  function renderFreeResourcesPage() {
    return `
      ${renderAcademySubnav('resources')}
      <section class="section section-soft" style="padding-top: 54px;">
        <div class="container">
          <div class="breadcrumbs">
            <a href="#home">Home</a> <span>/</span> <a href="#academy">Academy</a> <span>/</span> Free Resources
          </div>
          <div class="section-header">
            <div class="eyebrow">Step-By-Step Cybersecurity Roadmap</div>
            <h1 class="section-title">From Zero to Job-Ready</h1>
            <p class="section-description">
              A completely free, 12-step learning plan to build cybersecurity skills from the ground up. No paid courses or bootcamps are required. Learn • Practice • Build • Grow.
            </p>
          </div>

          <!-- Information Banner -->
          <div class="demo-disclaimer-box" style="max-width: 900px; margin: 0 auto 36px; background: #EFF6FF; border-color: #BFDBFE; color: #1E40AF;">
            <strong>How to Follow This Roadmap:</strong> Follow each step in order, use the free resources, complete the hands-on practice, and move forward when you understand the concepts. Click any step below to reveal free websites, interactive labs, recommended YouTube courses, and pro tips.
          </div>

          <!-- Progressive Stages Container -->
          <div class="roadmap-container">
            ${ROADMAP_STAGES.map(stage => `
              <div class="roadmap-stage-card" id="card-${stage.id}">
                <div class="roadmap-stage-header">
                  <span class="stage-number-pill">STAGE ${stage.number}</span>
                  <span class="badge badge-gold" style="font-size: 0.75rem;">${stage.targetCert}</span>
                </div>
                <h3 class="stage-title">${stage.stepNumber} - ${stage.title}</h3>
                <p class="stage-summary-text">${stage.summary}</p>
                <div>
                  <button 
                    class="stage-toggle-btn" 
                    onclick="window.navaApp.toggleRoadmapStage('${stage.id}')"
                    id="btn-${stage.id}"
                    aria-expanded="false"
                  >
                    <span>View Stage Topics & Resources</span>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                  </button>
                </div>

                <div class="stage-expandable-content" id="details-${stage.id}">
                  <!-- Core Topics -->
                  <div class="stage-topics-group">
                    <div class="stage-topics-title">What You'll Learn:</div>
                    <div class="stage-topics-list">
                      ${stage.topics.map(t => `
                        <div class="stage-topics-item">
                          ${ICONS.check}
                          <span>${t}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>

                  <!-- Free Websites & Practice Labs -->
                  ${stage.freeWebsites && stage.freeWebsites.length > 0 ? `
                    <div class="stage-topics-group" style="margin-top: 20px;">
                      <div class="stage-subheading">Free Websites & Practice Labs:</div>
                      <div class="stage-resources-list">
                        ${stage.freeWebsites.map(res => `
                          <a href="${res.url}" target="_blank" rel="noopener noreferrer" class="stage-resource-link">
                            <span class="resource-badge">Free</span>
                            <span class="resource-title-text">${res.title}</span>
                            <span class="resource-icon">${ICONS.externalLink}</span>
                          </a>
                        `).join('')}
                      </div>
                    </div>
                  ` : ''}

                  <!-- YouTube Courses & Playlists -->
                  ${stage.youtube && stage.youtube.length > 0 ? `
                    <div class="stage-topics-group" style="margin-top: 20px;">
                      <div class="stage-subheading">YouTube Full Courses & Video Tutorials:</div>
                      <div class="stage-resources-list">
                        ${stage.youtube.map(yt => `
                          <a href="${yt.url}" target="_blank" rel="noopener noreferrer" class="stage-resource-link">
                            <span class="yt-badge">YouTube</span>
                            <span class="resource-title-text">${yt.title}</span>
                            <span class="resource-icon">${ICONS.externalLink}</span>
                          </a>
                        `).join('')}
                      </div>
                    </div>
                  ` : ''}

                  <!-- Pro Tip Box -->
                  ${stage.proTip ? `
                    <div class="stage-tip-box" style="margin-top: 22px;">
                      <strong>Pro Tip:</strong> ${stage.proTip}
                    </div>
                  ` : ''}
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Final Guidance Section from PDF -->
          <div class="final-guidance-card">
            <div class="eyebrow" style="color: var(--color-gold-accent); margin-bottom: 8px;">Roadmap Mindset</div>
            <h3>Final Guidance: Consistency Beats Credentials</h3>
            <p>
              Cybersecurity is one of the few fields where consistency beats credentials. The person who does 1 hour every day for 90 days will outlearn someone who has a degree but no hands-on practice. Stay consistent. Do the labs. Build the projects. Document everything. The job will come.
            </p>
            <div class="final-guidance-meta">
              <span>Curriculum Reference: 90 Days of Cybersecurity</span>
              <span>•</span>
              <span>All Resources 100% Free</span>
              <span>•</span>
              <span>2025-26 Modern Edition</span>
            </div>
          </div>

          <div style="text-align: center; margin-top: 48px;">
            <p style="color: var(--color-text-secondary); margin-bottom: 16px;">
              Have questions about roadmap milestones or need learning guidance?
            </p>
            <a href="#contact-section" class="btn btn-secondary">
              Ask About Learning Guidance
            </a>
          </div>
        </div>
      </section>
    `;
  }

  function renderEventsWorkshopsPage() {
    return `
      ${renderAcademySubnav('events')}
      <section class="section section-soft" style="padding-top: 54px;">
        <div class="container">
          <div class="breadcrumbs">
            <a href="#home">Home</a> <span>/</span> <a href="#academy">Academy</a> <span>/</span> Events & Workshops
          </div>
          <div class="section-header" style="margin-bottom: 40px;">
            <div class="eyebrow">Community & Learning</div>
            <h1 class="section-title">Events & Workshops</h1>
            <p class="section-description">
              Educational sessions, hands-on awareness workshops, and technical talks organized by NAVA Cyber Solutions.
            </p>
          </div>

          <!-- Single Original Workshop Card -->
          <div style="max-width: 760px; margin: 0 auto;">
            <div class="compact-box" style="padding: 28px;">
              <div>
                <div class="compact-box-header" style="margin-bottom: 14px;">
                  <span class="badge badge-gold" style="font-size: 0.75rem; font-weight: 700;">Organized by NAVA Cyber Solutions</span>
                  <span class="badge badge-neutral" style="font-size: 0.75rem;">Concluded</span>
                </div>
                <h3 class="compact-box-title" style="font-size: 1.35rem; margin-bottom: 12px;">Introduction to Cybersecurity at RCE</h3>
                <p class="compact-box-desc" style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
                  5-day intensive technical workshop covering networking fundamentals, vulnerability discovery, Linux system defense, and foundational ethical hacking for university attendees.
                </p>
                <div class="compact-box-meta" style="display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 24px; font-size: 0.875rem;">
                  <span><strong>Dates:</strong> October 9 - 13, 2026</span>
                  <span><strong>Duration:</strong> 5-Day Intensive</span>
                  <span><strong>Venue:</strong> RCE Campus</span>
                  <span><strong>Organizer:</strong> NAVA Cyber Solutions</span>
                </div>
              </div>
              <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                <a href="#academy/certifications" class="btn btn-primary btn-sm">
                  View Certificate Status
                </a>
                <a href="#contact-section?service=academy" class="btn btn-secondary btn-sm">
                  Contact Academy Team
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    `;
  }

  function renderCertificationsPage() {
    return `
      ${renderAcademySubnav('certifications')}
      <section class="section section-soft" style="padding-top: 54px;">
        <div class="container">
          <div class="breadcrumbs">
            <a href="#home">Home</a> <span>/</span> <a href="#academy">Academy</a> <span>/</span> Certifications
          </div>
          <div class="section-header" style="margin-bottom: 40px;">
            <div class="eyebrow">Recognition & Credentials</div>
            <h1 class="section-title">Certifications & Credentials</h1>
            <p class="section-description">
              Official credential verification and certificate downloads for NAVA Cybersecurity Academy workshop attendees.
            </p>
          </div>

          <!-- Single Original Workshop Certificate Card -->
          <div style="max-width: 760px; margin: 0 auto;">
            <div class="compact-box" style="padding: 28px;">
              <div>
                <div class="compact-box-header" style="margin-bottom: 14px;">
                  <span class="badge badge-soon" style="font-size: 0.75rem;">Available Soon</span>
                  <span class="badge badge-gold" style="font-size: 0.75rem; font-weight: 700;">Organized by NAVA Cyber Solutions</span>
                </div>
                <h3 class="compact-box-title" style="font-size: 1.35rem; margin-bottom: 12px;">Introduction to Cybersecurity at RCE</h3>
                <p class="compact-box-desc" style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
                  Official certificates of completion for participants of the 5-day technical workshop conducted October 9 - 13, 2026. Digital credential verification and certificate generation are currently in final preparation.
                </p>
                <div class="compact-box-meta" style="display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 24px; font-size: 0.875rem;">
                  <span><strong>Workshop:</strong> Introduction to Cybersecurity at RCE</span>
                  <span><strong>Conducted:</strong> October 9 - 13, 2026</span>
                  <span><strong>Venue:</strong> RCE Campus</span>
                  <span><strong>Lead:</strong> Abhiram Allada</span>
                </div>
              </div>
              <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                <a href="pages/coming-soon.html" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                  Available Soon
                </a>
                <a href="#contact-section?service=academy" class="btn btn-secondary btn-sm">
                  Contact Academy Team
                </a>
              </div>
            </div>
          </div>

          <div style="text-align: center; margin-top: 48px;">
            <p style="color: var(--color-text-secondary); margin-bottom: 14px; font-size: 0.9375rem;">
              Attended the Introduction to Cybersecurity at RCE workshop and have questions about your credential?
            </p>
            <a href="#contact-section" class="btn btn-secondary btn-sm">
              Contact Academy Team
            </a>
          </div>

        </div>
      </section>
    `;
  }



  function renderComingSoonView() {
    return `
      ${renderAcademySubnav('certifications')}
      <section class="section section-soft" style="padding-top: 54px; min-height: 70vh; display: flex; align-items: center;">
        <div class="container text-center" style="max-width: 680px; margin: 0 auto;">
          <div class="cert-single-card" style="text-align: center; padding: clamp(40px, 6vw, 64px);">
            <div style="width: 80px; height: 80px; margin: 0 auto 20px; border-radius: 50%; background: linear-gradient(135deg, rgba(16, 31, 59, 0.08) 0%, rgba(199, 166, 106, 0.16) 100%); border: 2px solid rgba(199, 166, 106, 0.4); display: grid; place-items: center; box-shadow: 0 10px 25px -5px rgba(199, 166, 106, 0.35);">
              <img src="assets/logos/nava-emblem-transparent.png?v=5" alt="NAVA Emblem" width="48" height="48">
            </div>
            <div class="eyebrow" style="margin-bottom: 8px;">NAVA Cybersecurity Academy</div>
            <h1 class="section-title" style="font-size: clamp(2rem, 3.5vw, 2.75rem); margin-bottom: 14px;">Workshop Certificates Available Soon</h1>
            <p style="font-size: 1.0625rem; color: var(--color-text-secondary); line-height: 1.65; margin-bottom: 30px;">
              Digital certificates of completion for participants of <strong>Introduction to Cybersecurity at RCE</strong>, organized by <strong>NAVA Cyber Solutions</strong> (conducted October 9 - 13, 2026), are in final verification and will be published shortly.
            </p>
            <div style="background: linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 18px 24px; margin-bottom: 32px; text-align: left;">
              <div style="display: flex; justify-content: space-between; align-items: center; padding-block: 8px; border-bottom: 1px solid rgba(226, 232, 240, 0.8); font-size: 0.9375rem;">
                <small style="color: var(--color-text-muted); font-weight: 600; text-transform: uppercase;">Conducted Workshop</small>
                <strong style="color: var(--color-navy-primary);">Introduction to Cybersecurity at RCE</strong>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding-block: 8px; border-bottom: 1px solid rgba(226, 232, 240, 0.8); font-size: 0.9375rem;">
                <small style="color: var(--color-text-muted); font-weight: 600; text-transform: uppercase;">Organizer</small>
                <strong style="color: var(--color-navy-primary);">Organized by NAVA Cyber Solutions</strong>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding-block: 8px; border-bottom: 1px solid rgba(226, 232, 240, 0.8); font-size: 0.9375rem;">
                <small style="color: var(--color-text-muted); font-weight: 600; text-transform: uppercase;">Workshop Schedule</small>
                <strong style="color: var(--color-navy-primary);">October 9 - 13, 2026</strong>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 8px; font-size: 0.9375rem;">
                <small style="color: var(--color-text-muted); font-weight: 600; text-transform: uppercase;">Certificate Status</small>
                <span class="badge badge-soon">Available Soon</span>
              </div>
            </div>
            <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
              <a href="#academy/certifications" class="btn btn-primary">
                ← Return to Certifications
              </a>
              <a href="#academy" class="btn btn-secondary">
                Explore Academy
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function toggleRoadmapStage(stageId) {
    const details = document.getElementById(`details-${stageId}`);
    const btn = document.getElementById(`btn-${stageId}`);
    if (!details || !btn) return;

    const isOpen = details.classList.contains('is-open');
    if (isOpen) {
      details.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      const span = btn.querySelector('span');
      if (span) span.textContent = 'View Stage Topics & Resources';
    } else {
      details.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      const span = btn.querySelector('span');
      if (span) span.textContent = 'Hide Stage Topics & Resources';
    }
  }

  function renderContactPage() {
    return `
      <section class="section section-soft">
        <div class="container">
          <div class="breadcrumbs">
            <a href="#home">Home</a> <span>/</span> Contact
          </div>
          <div class="contact-container">
            <div class="contact-info-pane">
              <div class="eyebrow">Connect With Us</div>
              <h2>Let’s make your digital systems safer.</h2>
              <p>
                Have questions about our cybersecurity reviews, secure software development, or Academy initiatives? Share your requirements and let's explore a practical solution.
              </p>

              <div class="contact-channels">
                <div class="channel-card">
                  <div class="channel-icon">${ICONS.mail}</div>
                  <div class="channel-details">
                    <small>Official Email</small>
                    <strong>navagroup.official@gmail.com</strong>
                    <div class="channel-notice" style="font-style: normal; color: var(--color-text-secondary);">Direct inquiries, cybersecurity consultations & academy support.</div>
                  </div>
                </div>

                <div class="channel-card">
                  <div class="channel-icon">${ICONS.phone}</div>
                  <div class="channel-details">
                    <small>Phone & Consultation</small>
                    <strong>Direct Inquiries & Call Support</strong>
                    <div class="channel-notice" style="font-style: normal; color: var(--color-text-secondary);">Direct phone consultations scheduled via navagroup.official@gmail.com</div>
                  </div>
                </div>

                <div class="channel-card">
                  <div class="channel-icon">${ICONS.shield}</div>
                  <div class="channel-details">
                    <small>Founder & Leadership</small>
                    <strong>ABHIRAM ALLADA - Founder</strong>
                    <div class="channel-notice" style="font-style: normal; color: var(--color-text-secondary);">NAVA Cyber Solutions</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="contact-form-card">
              <div class="demo-disclaimer-box">
                <strong>Inquiry Notice:</strong> Share your requirements below to schedule a cybersecurity review, development consultation, or workshop inquiry.
              </div>

              <form id="contactForm" novalidate>
                <div class="form-grid">
                  <div class="form-group">
                    <label for="contactName" class="form-label">Full Name <span class="required">*</span></label>
                    <input type="text" id="contactName" class="form-control" placeholder="Your Name" required />
                    <span class="field-error" id="nameError">Please enter your full name.</span>
                  </div>

                  <div class="form-group">
                    <label for="contactPhone" class="form-label">Phone Number (Optional)</label>
                    <input type="tel" id="contactPhone" class="form-control" placeholder="+91 XXXXX XXXXX" />
                  </div>

                  <div class="form-group col-span-2">
                    <label for="contactEmail" class="form-label">Email Address <span class="required">*</span></label>
                    <input type="email" id="contactEmail" class="form-control" placeholder="you@domain.com" required />
                    <span class="field-error" id="emailError">Please provide a valid email address.</span>
                  </div>

                  <div class="form-group col-span-2">
                    <label for="contactService" class="form-label">Service or Topic Required</label>
                    <select id="contactService" class="form-control">
                      <option value="General Inquiry">General Inquiry / Information</option>
                      <option value="cybersecurity-consulting">Cybersecurity Consulting</option>
                      <option value="web-app-security">Web Application Security</option>
                      <option value="secure-web-dev">Secure Web Development</option>
                      <option value="vulnerability-assessment">Security Testing & Vulnerability Assessment</option>
                      <option value="ai-solutions">AI-Powered Solutions (Guess Proof AI)</option>
                      <option value="technical-consulting">Technical Consulting & Digital Solutions</option>
                      <option value="academy">Academy Workshops & Education</option>
                    </select>
                  </div>

                  <div class="form-group col-span-2">
                    <label for="contactSubject" class="form-label">Subject</label>
                    <input type="text" id="contactSubject" class="form-control" placeholder="Brief summary of your inquiry" />
                  </div>

                  <div class="form-group col-span-2">
                    <label for="contactMessage" class="form-label">Message <span class="required">*</span></label>
                    <textarea id="contactMessage" class="form-control" placeholder="Please describe your requirements, project scope, or questions..." required></textarea>
                    <span class="field-error" id="messageError">Please enter a message (minimum 10 characters).</span>
                  </div>

                  <div class="form-group col-span-2">
                    <label class="consent-label">
                      <input type="checkbox" id="contactConsent" class="consent-checkbox" required />
                      <span>I agree to have NAVA Cyber Solutions process my submitted details for the purpose of answering this inquiry. <span class="required">*</span></span>
                    </label>
                    <span class="field-error" id="consentError">You must agree before submitting.</span>
                  </div>

                  <div class="form-group col-span-2">
                    <button type="submit" id="contactSubmitBtn" class="btn btn-primary" style="width: 100%;">
                      Send Message <span class="btn-icon">${ICONS.arrowRight}</span>
                    </button>
                  </div>
                </div>

                <div id="formStatusAlert" class="form-status-alert"></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderPrivacyPage() {
    return `
      <section class="section section-white">
        <div class="container-narrow">
          <div class="breadcrumbs">
            <a href="#home">Home</a> <span>/</span> Privacy Policy
          </div>
          <article class="detail-main-article" style="box-shadow: none; border: none; padding: 0;">
            <div class="eyebrow">Legal & Compliance</div>
            <h1 class="section-title">Privacy Policy</h1>
            <p style="color: var(--color-text-muted); font-size: 0.875rem;">Last Updated: October 2026</p>

            <div class="demo-disclaimer-box" style="margin-block: 20px;">
              <strong>Notice:</strong> This is a structured draft privacy policy reflecting NAVA Cyber Solutions' privacy-by-design standards. Review and tailor to match specific production third-party processors prior to commercial deployment.
            </div>

            <h2>1. Our Commitment to Privacy</h2>
            <p>
              NAVA Cyber Solutions ("we", "our", or "the Company"), founded by ABHIRAM ALLADA, prioritizes the fundamental right to digital privacy. We operate on principles of data minimization: we do not collect information that is not strictly necessary to provide our cybersecurity services and web applications.
            </p>

            <h2>2. Information Collection</h2>
            <p>
              When you browse our website, we do not employ invasive tracking cookies or sale-of-data advertising networks. Information is collected only in the following contexts:
            </p>
            <ul>
              <li><strong>Contact Submissions:</strong> When you voluntarily submit an inquiry through our contact form, we collect your name, email address, topic of interest, and message content solely to respond to your inquiry.</li>
              <li><strong>Interactive Tools (Guess Proof AI):</strong> Our heuristic password analyzer runs entirely client-side within your browser. Passwords evaluated in Guess Proof AI are <em>never</em> transmitted across the internet, logged to server databases, or saved in cookies.</li>
            </ul>

            <h2>3. Third-Party Hosting & Infrastructure</h2>
            <p>
              This website is planned for deployment on Firebase Hosting (Google Cloud). Firebase may record technical request headers (such as IP addresses and user-agent strings) for security inspection, DDOS mitigation, and content delivery network caching in accordance with Google's Cloud Privacy Notice.
            </p>

            <h2>4. Your Data Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of any personal information you have submitted to us. To exercise these rights, contact us at contact@navacybersolutions.com.
            </p>
          </article>
        </div>
      </section>
    `;
  }

  function renderTermsPage() {
    return `
      <section class="section section-white">
        <div class="container-narrow">
          <div class="breadcrumbs">
            <a href="#home">Home</a> <span>/</span> Terms of Service
          </div>
          <article class="detail-main-article" style="box-shadow: none; border: none; padding: 0;">
            <div class="eyebrow">Legal & Compliance</div>
            <h1 class="section-title">Terms of Service</h1>
            <p style="color: var(--color-text-muted); font-size: 0.875rem;">Last Updated: October 2026</p>

            <div class="demo-disclaimer-box" style="margin-block: 20px;">
              <strong>Notice:</strong> Structured draft terms of service for NAVA Cyber Solutions web platforms and educational resources.
            </div>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the NAVA Cyber Solutions website and digital services, you agree to comply with and be bound by these Terms of Service and all applicable laws and regulations.
            </p>

            <h2>2. Permitted Use & Authorized Testing Rules</h2>
            <p>
              NAVA Cyber Solutions provides cybersecurity consulting and authorized vulnerability assessments. You explicitly agree that:
            </p>
            <ul>
              <li>No assessment or security scan may be initiated against any system or IP without prior executed written authorization and agreed Scope of Work.</li>
              <li>You will not use NAVA educational resources, Academy materials, or code snippets for unlawful or unauthorized access attempts.</li>
              <li>All demonstrations and case studies provided on this website are intended solely for educational awareness and defensive hardening.</li>
            </ul>

            <h2>3. Disclaimers & Limitation of Liability</h2>
            <p>
              While we strive to provide reliable and accurate security intelligence, cybersecurity is an evolving domain. No assessment or pattern analyzer guarantees absolute invulnerability. Tools like Guess Proof AI provide heuristic estimations and must not be considered a substitute for comprehensive authentication defense or operational security management.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All proprietary brand assets, logos, design marks, courseware, and original source materials are the exclusive intellectual property of NAVA Cyber Solutions and founder ABHIRAM ALLADA.
            </p>
          </article>
        </div>
      </section>
    `;
  }

  /* ==========================================================================
     INTERACTIVE COMPONENT LOGIC
     ========================================================================== */

  // Interactive Password Risk Evaluator (Guess Proof AI Demo)
  function initHeroDemo() {
    const input = document.getElementById('demoPasswordInput');
    if (!input) return;

    input.addEventListener('input', () => {
      evaluatePassword(input.value);
    });

    evaluatePassword(input.value);
  }

  function evaluatePassword(pwd) {
    const bar = document.getElementById('demoMeterBar');
    const rating = document.getElementById('demoRiskRating');
    const entropy = document.getElementById('demoEntropyScore');
    const note = document.getElementById('demoHeuristicNote');
    if (!bar || !rating || !entropy || !note) return;

    if (!pwd || pwd.length === 0) {
      bar.style.width = '5%';
      bar.style.backgroundColor = '#E53E3E';
      rating.innerHTML = 'Risk Level: <strong>Critical</strong>';
      entropy.textContent = 'Entropy: 0 bits';
      note.textContent = 'Please enter a password to evaluate its heuristic pattern risks.';
      return;
    }

    let score = 0;
    const len = pwd.length;

    // Length contribution
    score += Math.min(len * 4, 36);

    // Variety checks
    const hasLower = /[a-z]/.test(pwd);
    const hasUpper = /[A-Z]/.test(pwd);
    const hasDigit = /[0-9]/.test(pwd);
    const hasSymbol = /[^a-zA-Z0-9]/.test(pwd);

    let varietyCount = [hasLower, hasUpper, hasDigit, hasSymbol].filter(Boolean).length;
    score += varietyCount * 12;

    // Penalties for common patterns
    let penalty = 0;
    const lower = pwd.toLowerCase();

    // Check keyboard walks
    const walks = ['qwerty', 'asdf', 'zxcv', '12345', '67890', 'password', 'admin', 'welcome'];
    for (const w of walks) {
      if (lower.includes(w)) {
        penalty += 25;
      }
    }

    // Repeated characters
    if (/(.)\1{2,}/.test(pwd)) {
      penalty += 15;
    }

    let finalScore = Math.max(5, Math.min(100, score - penalty));
    let approxEntropy = Math.round(len * 4.2 - (penalty * 0.4));
    approxEntropy = Math.max(10, approxEntropy);

    bar.style.width = `${finalScore}%`;

    if (finalScore < 35) {
      bar.style.backgroundColor = '#E53E3E'; // Red
      rating.innerHTML = 'Risk Level: <strong style="color: #E53E3E;">High / Critical</strong>';
      entropy.textContent = `Entropy: ~${approxEntropy} bits`;
      note.textContent = 'High vulnerability: short length or predictable pattern/walk detected. Easily cracked by standard dictionary lists.';
    } else if (finalScore < 70) {
      bar.style.backgroundColor = '#F59E0B'; // Amber
      rating.innerHTML = 'Risk Level: <strong style="color: #D97706;">Moderate</strong>';
      entropy.textContent = `Entropy: ~${approxEntropy} bits`;
      note.textContent = 'Moderate resistance: good variety, but consider increasing character length to 14+ characters for optimal resilience.';
    } else {
      bar.style.backgroundColor = '#10B981'; // Green
      rating.innerHTML = 'Risk Level: <strong style="color: #059669;">Low / Strong</strong>';
      entropy.textContent = `Entropy: ~${approxEntropy} bits`;
      note.textContent = 'Excellent strength: strong length, character diversity, and zero predictable keyboard walks detected.';
    }
  }

  // Render filtered academy resource cards
  function renderFilteredAcademyCards() {
    const q = (searchQuery || '').toLowerCase().trim();
    const cat = currentCategoryFilter || 'ALL';

    const filtered = ACADEMY_RESOURCES.filter(r => {
      const matchCat = (cat === 'ALL') || (r.category && r.category.toUpperCase() === cat.toUpperCase());
      const matchQuery = !q || 
        (r.title && r.title.toLowerCase().includes(q)) || 
        (r.desc && r.desc.toLowerCase().includes(q)) ||
        (r.category && r.category.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      return `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: var(--card-bg); border-radius: var(--radius-lg); border: 1px dashed var(--card-border);">
          <p style="font-size: 1.1rem; color: var(--primary-color); font-weight: 700; margin-bottom: 8px;">No learning resources matched your search</p>
          <p style="font-size: 0.9375rem; color: var(--secondary-color); margin-bottom: 16px;">Try adjusting your search terms or filter selection.</p>
          <button id="resetAcademyFilterBtn" class="btn btn-secondary btn-sm">Reset Filters</button>
        </div>
      `;
    }

    return filtered.map(r => `
      <article class="resource-card">
        <div class="resource-card-header">
          <span class="resource-category">${r.category}</span>
          <span class="badge ${r.status === 'Preview' ? 'badge-gold' : 'badge-neutral'}">${r.status || 'Coming Soon'}</span>
        </div>
        <h3 class="resource-title">${r.title}</h3>
        <p class="resource-desc">${r.desc}</p>
        <div class="resource-footer" style="margin-top: auto; padding-top: 16px;">
          <span style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 500;">${r.type}</span>
          <button class="btn btn-secondary btn-sm" onclick="window.navaApp.openResourceModal('${r.id}')" style="font-size: 0.75rem; padding: 6px 12px;">
            Preview Syllabus
          </button>
        </div>
      </article>
    `).join('');
  }

  // Academy Filters & Search
  function initAcademyControls() {
    const searchInput = document.getElementById('academySearchInput');
    const chips = document.querySelectorAll('.category-chip');
    const grid = document.getElementById('academyResourcesGrid');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        if (grid) grid.innerHTML = renderFilteredAcademyCards();
        rebindResetBtn();
      });
    }

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentCategoryFilter = chip.dataset.category;
        if (grid) grid.innerHTML = renderFilteredAcademyCards();
        rebindResetBtn();
      });
    });

    rebindResetBtn();
  }

  function rebindResetBtn() {
    const resetBtn = document.getElementById('resetAcademyFilterBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        searchQuery = '';
        currentCategoryFilter = 'ALL';
        const searchInput = document.getElementById('academySearchInput');
        if (searchInput) searchInput.value = '';
        const chips = document.querySelectorAll('.category-chip');
        chips.forEach(c => c.classList.toggle('active', c.dataset.category === 'ALL'));
        const grid = document.getElementById('academyResourcesGrid');
        if (grid) grid.innerHTML = renderFilteredAcademyCards();
      });
    }
  }

  const EMAILJS_CONFIG = {
    serviceId: 'service_g98hrf7',
    templateId: 'template_0cw2u8f',
    publicKey: 'onvovVwx2bhkeSuys'
  };

  // Contact Form Submission & Validation with EmailJS Integration
  function initContactForm(queryParams) {
    const form = document.getElementById('contactForm');
    const serviceSelect = document.getElementById('contactService');
    const statusAlert = document.getElementById('formStatusAlert');
    if (!form) return;

    // Pre-populate service dropdown if query parameter exists
    const prefillService = queryParams.get('service');
    if (prefillService && serviceSelect) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].value === prefillService) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const name = document.getElementById('contactName');
      const phone = document.getElementById('contactPhone');
      const email = document.getElementById('contactEmail');
      const subject = document.getElementById('contactSubject');
      const message = document.getElementById('contactMessage');
      const consent = document.getElementById('contactConsent');

      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');
      const consentError = document.getElementById('consentError');

      // Validate Name
      if (!name.value.trim()) {
        name.classList.add('is-invalid');
        nameError.classList.add('visible');
        isValid = false;
      } else {
        name.classList.remove('is-invalid');
        nameError.classList.remove('visible');
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        email.classList.add('is-invalid');
        emailError.classList.add('visible');
        isValid = false;
      } else {
        email.classList.remove('is-invalid');
        emailError.classList.remove('visible');
      }

      // Validate Message
      if (!message.value.trim() || message.value.trim().length < 10) {
        message.classList.add('is-invalid');
        messageError.classList.add('visible');
        isValid = false;
      } else {
        message.classList.remove('is-invalid');
        messageError.classList.remove('visible');
      }

      // Validate Consent Checkbox
      if (!consent.checked) {
        consentError.classList.add('visible');
        isValid = false;
      } else {
        consentError.classList.remove('visible');
      }

      if (!isValid) return;

      const submitBtn = document.getElementById('contactSubmitBtn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = `Sending inquiry... <span style="display:inline-block; margin-left: 8px;">⏳</span>`;

      const nameVal = name.value.trim();
      const emailVal = email.value.trim();
      const phoneVal = phone && phone.value.trim() ? phone.value.trim() : 'Not provided';
      const serviceVal = serviceSelect ? (serviceSelect.options[serviceSelect.selectedIndex]?.text || serviceSelect.value) : 'General Inquiry';
      const subjectVal = (subject && subject.value.trim()) ? subject.value.trim() : `Website Inquiry from ${nameVal}`;
      const messageVal = message.value.trim();

      // Exhaustive parameter mapping for EmailJS templates
      const templateParams = {
        name: nameVal,
        from_name: nameVal,
        user_name: nameVal,

        email: emailVal,
        from_email: emailVal,
        user_email: emailVal,
        reply_to: emailVal,

        phone: phoneVal,
        contact_phone: phoneVal,
        user_phone: phoneVal,

        service: serviceVal,
        service_name: serviceVal,
        service_topic: serviceVal,

        subject: subjectVal,

        message: messageVal,
        message_html: messageVal,
        content: messageVal,

        to_name: 'NAVA Cyber Solutions',
        site_name: 'NAVA Cyber Solutions',
        submission_time: new Date().toLocaleString()
      };

      function dispatchEmail() {
        if (window.emailjs) {
          try {
            window.emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
          } catch (_) {}
          return window.emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams,
            EMAILJS_CONFIG.publicKey
          );
        } else {
          return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
            script.onload = () => {
              if (window.emailjs) {
                try {
                  window.emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
                } catch (_) {}
                window.emailjs.send(
                  EMAILJS_CONFIG.serviceId,
                  EMAILJS_CONFIG.templateId,
                  templateParams,
                  EMAILJS_CONFIG.publicKey
                ).then(resolve).catch(reject);
              } else {
                reject(new Error('EmailJS SDK failed to load.'));
              }
            };
            script.onerror = () => reject(new Error('Failed to load EmailJS library.'));
            document.head.appendChild(script);
          });
        }
      }

      dispatchEmail()
        .then((response) => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `Send Message <span class="btn-icon">${ICONS.arrowRight}</span>`;

          statusAlert.className = 'form-status-alert success';
          statusAlert.innerHTML = `
            <strong>Inquiry Sent Successfully!</strong> Thank you, ${escapeHTML(nameVal)}. Your message has been transmitted directly to our inbox via EmailJS. We will respond to <strong>${escapeHTML(emailVal)}</strong> shortly.
          `;

          form.reset();
          showToast('Inquiry sent successfully via EmailJS!');
        })
        .catch((error) => {
          console.error('EmailJS transmission error:', error);
          submitBtn.disabled = false;
          submitBtn.innerHTML = `Send Message <span class="btn-icon">${ICONS.arrowRight}</span>`;

          statusAlert.className = 'form-status-alert error';
          statusAlert.innerHTML = `
            <strong>Delivery Notice:</strong> There was an issue transmitting your inquiry directly (${escapeHTML(error?.text || error?.message || 'Email delivery service error')}). Please email us directly at <a href="mailto:navagroup.official@gmail.com" style="color: inherit; text-decoration: underline;"><strong>navagroup.official@gmail.com</strong></a>.
          `;

          showToast('Failed to send message. Please contact navagroup.official@gmail.com directly.');
        });
    });
  }

  /* ==========================================================================
     GLOBAL NAVIGATION, MODAL & TOAST
     ========================================================================== */

  function setupGlobalListeners() {
    // Intercept clicks on anchor tags pointing to hashes for instant & repeated responsiveness
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const targetHash = href.slice(1);
      const [targetPath] = targetHash.split('?');
      const currentRawHash = (window.location.hash || '').slice(1);
      const [currentPath] = currentRawHash.split('?');

      closeMobileMenu();

      const homeSections = ['about-section', 'services-section', 'projects-section', 'contact-section'];

      // If clicking the link corresponding to the current URL hash, force action
      if (targetPath.toLowerCase() === currentPath.toLowerCase()) {
        if (targetPath === 'home' || targetPath === '') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          updateActiveNav('home');
        } else if (homeSections.includes(targetPath)) {
          e.preventDefault();
          scrollToSection(targetPath);
          updateActiveNav(targetPath);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return;
      }
    });

    // Mobile Drawer Toggle
    bindMobileToggle();

    // Portfolio Reference UI Enhancements
    initTheme();
    initProgressBar();
    initMoreSheet();

    // Modal background click and escape key
    const modal = document.getElementById('resourceModal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeResourceModal();
        }
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeResourceModal();
        closeMobileMenu();
      }
    });
  }

  /* ==========================================================================
     THEME TOGGLE SYSTEM (PORTFOLIO REFERENCE SPEC)
     ========================================================================== */
  function initTheme() {
    const savedTheme = localStorage.getItem('nava_portfolio_theme') || localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    updateThemeIcons(isDark);
    bindThemeToggle();
  }

  function bindThemeToggle() {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle, .theme-btn');
    themeToggleBtns.forEach(btn => {
      btn.onclick = (e) => {
        e.preventDefault();
        document.body.classList.toggle('dark-theme');
        const darkActive = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', darkActive ? 'dark' : 'light');
        localStorage.setItem('nava_portfolio_theme', darkActive ? 'dark' : 'light');
        updateThemeIcons(darkActive);
      };
    });
  }

  function updateThemeIcons(isDark) {
    const icons = document.querySelectorAll('#theme-toggle i, .theme-btn i');
    icons.forEach(icon => {
      icon.className = isDark ? 'ri-sun-line' : 'ri-moon-line';
    });
  }

  /* ==========================================================================
     SCROLL PROGRESS BAR
     ========================================================================== */
  function initProgressBar() {
    const bar = document.querySelector('.progress-bar');
    if (!bar) return;
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
    }, { passive: true });
  }

  /* ==========================================================================
     MOBILE MORE PANEL (GLASS BOTTOM SHEET)
     ========================================================================== */
  function initMoreSheet() {
    const moreBtn = document.getElementById('more-btn');
    const morePanel = document.getElementById('more-panel');
    const moreBackdrop = document.getElementById('more-backdrop');
    const moreCloseBtn = document.getElementById('more-close-btn');

    function openSheet() {
      if (!morePanel || !moreBackdrop) return;
      morePanel.classList.add('open');
      moreBackdrop.classList.add('open');
      if (moreBtn) moreBtn.setAttribute('aria-expanded', 'true');
    }

    function closeSheet() {
      if (!morePanel || !moreBackdrop) return;
      morePanel.classList.remove('open');
      moreBackdrop.classList.remove('open');
      if (moreBtn) moreBtn.setAttribute('aria-expanded', 'false');
    }

    if (moreBtn) {
      moreBtn.onclick = (e) => {
        e.preventDefault();
        if (morePanel && morePanel.classList.contains('open')) {
          closeSheet();
        } else {
          openSheet();
        }
      };
    }

    if (moreCloseBtn) moreCloseBtn.onclick = closeSheet;
    if (moreBackdrop) moreBackdrop.onclick = closeSheet;

    document.querySelectorAll('.more-panel-item').forEach(item => {
      item.addEventListener('click', () => {
        closeSheet();
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && morePanel && morePanel.classList.contains('open')) {
        closeSheet();
      }
    });
  }

  function closeMobileMenu() {
    const drawer = document.getElementById('mobileDrawer');
    const toggleBtn = document.getElementById('mobileMenuToggle');
    if (drawer) drawer.classList.remove('open');
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
  }

  function initHeroVideoLoop() {
    const video = document.getElementById('heroBrandVideo');
    if (video) {
      video.muted = true;
      video.play().catch(() => {
        // Fallback for strict browser autoplay policies
        const playOnInteraction = () => {
          video.play().catch(() => {});
          window.removeEventListener('click', playOnInteraction);
          window.removeEventListener('scroll', playOnInteraction);
        };
        window.addEventListener('click', playOnInteraction, { once: true });
        window.addEventListener('scroll', playOnInteraction, { once: true });
      });
    }
  }

  function downloadCertificate(certId) {
    const cert = ACADEMY_CERTIFICATES.find(c => c.id === certId);
    if (!cert) return;
    showToast(`Downloading credential: ${cert.title}`);
  }

  function verifyCertificate(credId) {
    const cert = ACADEMY_CERTIFICATES.find(c => c.credentialId === credId);
    if (!cert) return;
    showToast(`Credential [${credId}] Verified Authentic: ${cert.title}`);
  }

  function renderFloatingNav(path) {
    const floatNav = document.getElementById('floatNav');
    if (!floatNav) return;

    const rawPath = (path || '').toLowerCase();
    const isAcademy = rawPath === 'academy' || rawPath.startsWith('academy/') || rawPath.startsWith('academy-') || rawPath === 'coming-soon';

    const currentNavMode = floatNav.getAttribute('data-nav-mode') || 'main';
    const targetMode = isAcademy ? 'academy' : 'main';

    if (currentNavMode !== targetMode || !floatNav.children.length) {
      floatNav.setAttribute('data-nav-mode', targetMode);
      if (isAcademy) {
        floatNav.innerHTML = `
          <a href="#home" class="float-nav-item" data-nav="main-home" aria-label="Main Website Home">
            <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span>Home</span>
          </a>
          <a href="#academy" class="float-nav-item" data-nav="academy-about" aria-label="About Academy">
            <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4"/>
              <path d="M12 8h.01"/>
            </svg>
            <span>About Academy</span>
          </a>
          <a href="#academy/resources" class="float-nav-item" data-nav="academy-resources" aria-label="Free Resources">
            <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"/>
              <polyline points="2 17 12 22 22 17"/>
              <polyline points="2 12 12 17 22 12"/>
            </svg>
            <span>Free Resources</span>
          </a>
          <a href="#academy/courses" class="float-nav-item" data-nav="academy-courses" aria-label="Courses">
            <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            <span>Courses</span>
          </a>
          <a href="#academy/events" class="float-nav-item" data-nav="academy-events" aria-label="Events">
            <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
              <line x1="16" x2="16" y1="2" y2="6"/>
              <line x1="8" x2="8" y1="2" y2="6"/>
              <line x1="3" x2="21" y1="10" y2="10"/>
            </svg>
            <span>Events</span>
          </a>
          <a href="#academy/certifications" class="float-nav-item" data-nav="academy-certifications" aria-label="Certificates">
            <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="8" r="6"/>
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
            <span>Certificates</span>
          </a>
        `;
      } else {
        floatNav.innerHTML = `
          <a href="#home" class="float-nav-item" data-nav="home" aria-label="Home">
            <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span>Home</span>
          </a>
          <a href="#about-section" class="float-nav-item" data-nav="about-section" aria-label="About Us">
            <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span>About</span>
          </a>
          <a href="#services-section" class="float-nav-item" data-nav="services-section" aria-label="Services">
            <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>Services</span>
          </a>
          <a href="#projects-section" class="float-nav-item" data-nav="projects-section" aria-label="Projects">
            <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
              <path d="M8 10v4"/>
              <path d="M12 10v2"/>
              <path d="M16 10v6"/>
            </svg>
            <span>Projects</span>
          </a>
          <a href="#academy" class="float-nav-item" data-nav="academy" aria-label="Academy">
            <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/>
              <path d="M22 10v6"/>
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
            </svg>
            <span>Academy</span>
          </a>
          <a href="#contact-section" class="float-nav-item" data-nav="contact-section" aria-label="Contact">
            <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            <span>Contact</span>
          </a>
        `;
      }
    }

    // Sync active states on floating links
    const floatLinks = floatNav.querySelectorAll('.float-nav-item');
    floatLinks.forEach(fl => {
      const target = fl.getAttribute('data-nav') || '';
      let isMatch = false;
      if (isAcademy) {
        if (target === 'academy-about' && (rawPath === 'academy' || rawPath === 'academy/about' || rawPath === 'academy/home' || rawPath === 'academy-about')) isMatch = true;
        if (target === 'academy-resources' && (rawPath === 'academy/resources' || rawPath === 'academy-resources')) isMatch = true;
        if (target === 'academy-courses' && (rawPath === 'academy/courses' || rawPath === 'academy-courses')) isMatch = true;
        if (target === 'academy-events' && (rawPath === 'academy/events' || rawPath === 'academy-events')) isMatch = true;
        if (target === 'academy-certifications' && (rawPath === 'academy/certifications' || rawPath === 'academy-certifications' || rawPath === 'coming-soon')) isMatch = true;
      } else {
        const rootPath = rawPath.split('/')[0] || 'home';
        isMatch = (target === rawPath) || 
                  (target === rootPath) ||
                  (target === 'home' && (rawPath === '' || rawPath === 'home')) ||
                  (target === 'about-section' && (rawPath === 'about-section' || rawPath === 'about-detail' || rawPath === 'about')) ||
                  (target === 'services-section' && (rawPath === 'services-section' || rawPath === 'services' || rawPath.startsWith('service/'))) ||
                  (target === 'projects-section' && (rawPath === 'projects-section' || rawPath === 'projects' || rawPath.startsWith('project/'))) ||
                  (target === 'contact-section' && (rawPath === 'contact-section' || rawPath === 'contact')) ||
                  (target === 'academy' && rawPath.startsWith('academy'));
      }
      fl.classList.toggle('active', isMatch);
    });
  }

  function updateActiveNav(path) {
    const rootPath = path.split('/')[0] || 'home';
    const links = document.querySelectorAll('.nav-link, .mobile-nav-link');
    links.forEach(l => {
      const href = l.getAttribute('href') || '';
      const target = href.replace('#', '') || '';

      const isMatch = (target === path) || 
                      (target === rootPath) ||
                      (target === 'home' && (path === '' || path === 'home')) ||
                      (target === 'about-section' && (path === 'about-section' || path === 'about-detail' || path === 'about')) ||
                      (target === 'services-section' && (path === 'services-section' || path === 'services' || path.startsWith('service/'))) ||
                      (target === 'projects-section' && (path === 'projects-section' || path === 'projects' || path.startsWith('project/'))) ||
                      (target === 'contact-section' && (path === 'contact-section' || path === 'contact')) ||
                      (target === 'academy' && path.startsWith('academy'));

      if (isMatch) {
        l.classList.add('active');
      } else {
        l.classList.remove('active');
      }
    });

    // Dynamically render & sync Floating Bottom Navigation Dock
    renderFloatingNav(path);

    const moreBtn = document.getElementById('more-btn');
    if (moreBtn) {
      const isInsideMore = path.startsWith('academy') || path === 'contact-section' || path === 'contact';
      moreBtn.classList.toggle('has-sub-active', isInsideMore);
    }
  }

  /* Scroll Spy - continuously updates active nav link as user scrolls or reaches bottom */
  function onWindowScroll() {
    if (!scrollSpyActive || isNavClickScrolling) return;
    if (!scrollSpyTicking) {
      window.requestAnimationFrame(() => {
        updateScrollSpyPosition();
        scrollSpyTicking = false;
      });
      scrollSpyTicking = true;
    }
  }

  function updateScrollSpyPosition() {
    const rawHash = (window.location.hash || '').slice(1).split('?')[0].toLowerCase();
    const isAcademy = rawHash === 'academy' || rawHash.startsWith('academy/') || rawHash.startsWith('academy-');
    if (isAcademy) return;

    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Detect if user has reached bottom of page -> activate contact
    if (scrollY + windowHeight >= docHeight - 90) {
      highlightNavLink('contact-section');
      return;
    }

    const sectionIds = ['hero', 'about-section', 'services-section', 'projects-section', 'contact-section'];
    const sectionToNav = {
      'hero': 'home',
      'about-section': 'about-section',
      'services-section': 'services-section',
      'projects-section': 'projects-section',
      'contact-section': 'contact-section'
    };

    const headerOffset = 110;
    let activeNav = 'home';

    for (let i = 0; i < sectionIds.length; i++) {
      const el = document.getElementById(sectionIds[i]);
      if (el) {
        const top = el.offsetTop - headerOffset;
        if (scrollY >= top) {
          activeNav = sectionToNav[sectionIds[i]];
        }
      }
    }

    highlightNavLink(activeNav);
  }

  function initScrollSpy() {
    destroyScrollSpy();
    scrollSpyActive = true;
    window.addEventListener('scroll', onWindowScroll, { passive: true });
    requestAnimationFrame(updateScrollSpyPosition);
  }

  function destroyScrollSpy() {
    scrollSpyActive = false;
    window.removeEventListener('scroll', onWindowScroll);
  }

  function highlightNavLink(sectionId) {
    const links = document.querySelectorAll('.nav-link, .mobile-nav-link');
    links.forEach(l => {
      const href = (l.getAttribute('href') || '').replace('#', '');
      const isMatch = (href === sectionId) || 
                      (sectionId === 'home' && (href === 'home' || href === ''));
      if (isMatch) {
        l.classList.add('active');
      } else {
        l.classList.remove('active');
      }
    });

    const floatLinks = document.querySelectorAll('.float-nav-item[data-nav], .more-panel-item[data-nav]');
    floatLinks.forEach(fl => {
      const navTarget = fl.getAttribute('data-nav') || '';
      const isMatch = (navTarget === sectionId) ||
                      (sectionId === 'home' && (navTarget === 'home' || navTarget === ''));
      fl.classList.toggle('active', isMatch);
    });
  }

  /* Scroll Reveal Animation Trigger */
  function initScrollReveal() {
    requestAnimationFrame(() => {
      const items = document.querySelectorAll('.service-card, .resource-card, .project-card, .stat-card, .roadmap-stage-card, .event-card, .cert-card, .academy-feature-box');
      items.forEach((item, index) => {
        if (!item.classList.contains('reveal-fade-up')) {
          item.classList.add('reveal-fade-up');
          item.style.animationDelay = `${(index % 4) * 0.08}s`;
        }
      });
    });
  }

  function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  function openResourceModal(resourceId) {
    const r = ACADEMY_RESOURCES.find(item => item.id === resourceId);
    if (!r) return;

    const modal = document.getElementById('resourceModal');
    const body = document.getElementById('resourceModalBody');
    if (!modal || !body) return;

    body.innerHTML = `
      <div class="modal-header">
        <div>
          <span class="eyebrow">${r.category}</span>
          <h2 style="font-size: 1.5rem; color: var(--color-navy-primary); margin-top: 4px;">${r.title}</h2>
        </div>
        <button class="modal-close-btn" onclick="window.navaApp.closeResourceModal()" aria-label="Close modal">
          ${ICONS.close}
        </button>
      </div>
      <div style="margin-bottom: 20px;">
        <span class="badge ${r.status === 'Preview' ? 'badge-gold' : 'badge-neutral'}">${r.status}</span>
        <span class="badge badge-neutral" style="margin-left: 6px;">${r.type}</span>
      </div>
      <p style="color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 24px;">
        ${r.desc}
      </p>
      <h4 style="font-size: 1rem; color: var(--color-navy-primary); margin-bottom: 12px;">Curriculum & Core Modules:</h4>
      <ul style="margin-bottom: 28px;">
        ${r.modules.map(m => `
          <li style="position: relative; padding-left: 20px; margin-bottom: 8px; color: var(--color-text-secondary); font-size: 0.9375rem;">
            <span style="position: absolute; left: 0; color: var(--color-gold-accent);">✔</span> ${m}
          </li>
        `).join('')}
      </ul>
      <div style="display: flex; justify-content: flex-end; gap: 12px; border-top: 1px solid var(--color-border); padding-top: 20px;">
        <button class="btn btn-secondary" onclick="window.navaApp.closeResourceModal()">Close</button>
        <a href="#contact?service=academy" class="btn btn-primary" onclick="window.navaApp.closeResourceModal()">
          Request Course Details
        </a>
      </div>
    `;

    modal.classList.add('open');
  }

  function closeResourceModal() {
    const modal = document.getElementById('resourceModal');
    if (modal) modal.classList.remove('open');
  }

  function escapeHTML(str) {
    if (str == null) return '';
    return String(str).replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  // Export public namespace for inline HTML event handlers
  window.navaApp = {
    openResourceModal,
    closeResourceModal,
    showToast,
    toggleRoadmapStage,
    downloadCertificate,
    verifyCertificate
  };

  // Boot Router
  initRouter();

})();
