export interface ServicePackage {
  id: 'jump-start' | 'grant-ready' | 'full-service' | 'government-grants';
  slug: string;
  name: string;
  badge?: string;
  priceDisplay: string;
  ctaLabel: string;
  ctaType: 'toast' | 'contact';
  shortSummary: string;
  guidePromptOption: string;
  guideResultSentence: string;
  whatItIs: string;
  whoItIsFor: string;
  whatYouCanExpect: string[];
  hasSampleCopy: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  credentials?: string;
  role: string;
  initials: string;
  bioParagraphs: string[];
  highlights: string[];
}

export interface DirectorySampleRow {
  id: string;
  label: string;
  funderPlaceholder: string;
  focusArea: string;
  stateRegion: string;
  funderType: string;
  typicalAwardPlaceholder: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  isSampleCopy: boolean;
}

export interface DownloadResource {
  id: string;
  title: string;
  description: string;
  formatLabel: string;
  isSampleCopy: boolean;
}

export const SITE_CONTENT = {
  previewBanner: 'Design preview by Binergi. This is not a live site, and forms are not connected yet.',
  previewToastMessage: 'This is a design preview, so nothing was sent. In the live site, this reaches the Here-4-You team.',
  sampleCopyBadgeText: 'Sample copy, to be replaced with approved content.',
  footerPreviewCredit: 'Design preview by Binergi Digital Concepts.',

  brand: {
    name: 'Here-4-You Consulting',
    wordmark: 'HERE-4-YOU CONSULTING',
    foundedYear: '2000',
    locationShort: 'Front Royal, VA',
    locationFull: 'Front Royal, Virginia',
    establishedLine: 'Established 2000 · Front Royal, Virginia',
    oneLineDescription: 'Christian grant writing and development for churches, ministries and mission-driven nonprofits.',
    corePromise: 'Pursue grants without compromising your faith or your mission.',
    customerServicePromise: 'Continual updates and personal attention, with no automated phone answering service.',
  },

  missionVerse: {
    text: '"...to equip the saints for the work of ministry, for building up the body of Christ."',
    reference: 'Ephesians 4:12 (ESV)',
  },

  contact: {
    phone: '(540) 635-3518',
    phoneHref: 'tel:5406353518',
    fax: '(413) 702-9031',
    street: '109 E. 6th Street',
    cityStateZip: 'Front Royal, VA 22630',
    fullAddress: '109 E. 6th Street, Front Royal, VA 22630',
    availabilityNote: 'Free strategy call and free consultation available.',
    servicePromise: 'When you call our office, you reach our team directly. We do not use an automated phone answering service, and we provide continual updates throughout your project.',
    disclaimer:
      'Here-4-You Consulting helps Christian ministries and churches secure grant funding. It is not a foundation or funding source and does not award grants, other funding, or donations of any kind. Do not use the contact form to request a grant or financial support.',
    shortDisclaimer:
      'Please note: Here-4-You Consulting helps organizations win grants and does not award grants, funding, or donations of any kind.',
  },

  socials: [
    { name: 'Twitter', url: 'https://twitter.com/JeffreyJRodman' },
    { name: 'Facebook', url: 'https://www.facebook.com/Here4YouConsulting' },
    { name: 'YouTube', url: 'https://www.youtube.com/JeffreyJRodman' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jeffreyrodman' },
  ],

  stats: [
    {
      value: '$500M+',
      label: 'Secured or supported in funding',
    },
    {
      value: '600+',
      label: 'Nonprofits and ministries assisted',
    },
    {
      value: '11',
      label: 'Countries served',
    },
    {
      value: '2000',
      label: 'Founded in Front Royal, Virginia',
    },
  ],

  home: {
    seo: {
      title: 'Here-4-You Consulting | Grants for Your Ministry Without Compromising Your Faith',
      description: 'Since 2000, Here-4-You Consulting has helped churches, Christian ministries and mission-driven nonprofits find, write and win funding.',
    },
    hero: {
      headline: 'Grants for your ministry, without compromising your faith.',
      lead: 'Since 2000, Here-4-You Consulting has helped churches, Christian ministries and mission-driven nonprofits find, write and win funding.',
      primaryCta: 'Book a free grant strategy call',
      secondaryCta: 'Browse the funding directory',
    },
    guideCard: {
      title: 'Where is your ministry today?',
      subtitle: 'Select the statement that best describes your current step:',
      buttonPrefix: 'Explore',
    },
    whyChoose: {
      heading: 'Why ministries choose Here-4-You',
      items: [
        {
          title: 'Christian work is our specialty',
          body: 'We focus on churches, Christian ministries and mission-driven nonprofits so you can pursue grants without compromising your faith or your mission.',
        },
        {
          title: 'A full grant team without the hiring',
          body: 'You gain a fully qualified grant-writing team with years of experience, so you do not need to find, develop and equip in-house grant staff.',
        },
        {
          title: 'A real person answers',
          body: 'You receive continual updates and personal attention from our team, with no automated phone answering service.',
        },
      ],
    },
    servicesSection: {
      heading: 'How we serve your organization',
      lead: 'From self-paced templates to full-service grant writing, choose the level of support that fits your ministry.',
    },
    directoryTeaser: {
      kicker: 'Christian Funding Directory',
      heading: '8,000+ Christian and mission-aligned funders',
      body: 'Browse our curated database of more than 8,000 listed funding sources, verified and updated regularly. Free to browse when you create a free account.',
      cta: 'Create a free account',
      secondaryLinkText: 'Preview the directory search',
    },
    teamTeaser: {
      kicker: 'Leadership',
      heading: 'Led by Dr. Jeffrey J. Rodman, CFRE, CGS',
      body: 'Founder of Here-4-You Christian Grant Consulting, Certified Fund Raising Executive and Certified Grants Specialist. Dr. Rodman has written hundreds of proposals, secured millions of dollars as a consultant, had over 80% of his proposals funded, and secured over 90% of the dollars he applied for.',
      linkText: 'Meet our team and read our story',
    },
    clientStoriesPlaceholder: {
      heading: 'Ministry funding stories',
      boxLabel: 'Client story goes here. Add 2 or 3 named wins, with permission.',
      subNote: 'Reserved space for approved client accounts from churches and Christian ministries.',
    },
    closingCta: {
      heading: 'Talk to us before you write a single proposal.',
      body: 'Start with a free grant strategy call and consultation. We will talk through your ministry, your project, and the most realistic path to grant funding.',
      buttonText: 'Book a free grant strategy call',
    },
  },

  services: [
    {
      id: 'jump-start',
      slug: '/services/jump-start',
      name: 'Jump Start',
      priceDisplay: '$249',
      ctaLabel: 'Enroll in Jump Start',
      ctaType: 'toast',
      shortSummary: 'Self-paced training and templates to help your team write proposals in-house.',
      guidePromptOption: 'We are new to grants',
      guideResultSentence: 'Jump Start provides self-paced training and templates for $249 so your ministry can learn the fundamentals and begin preparing grant proposals.',
      whatItIs:
        'Jump Start is our self-paced training and templates package ($249) built for churches and Christian ministries that want a clear, structured introduction to grant development.',
      whoItIsFor:
        'Pastors, ministry leaders, and nonprofit staff or volunteers who are new to grant seeking and want practical guidance they can work through at their own pace.',
      whatYouCanExpect: [
        'Self-paced training modules explaining how foundation and community grant processes work for faith-based organizations.',
        'Editable proposal and project planning templates to help you organize your ministry description and program goals.',
        'Guidance on gathering basic organizational documents before approaching funders.',
        'Access to Jump Start member resources to guide your initial preparation.',
      ],
      hasSampleCopy: true,
    },
    {
      id: 'grant-ready',
      slug: '/services/grant-ready',
      name: 'Grant Ready',
      badge: 'Popular',
      priceDisplay: 'Contact us for pricing.',
      ctaLabel: 'Book a free grant strategy call',
      ctaType: 'contact',
      shortSummary: 'Guided readiness and initial submissions for ministries preparing a specific project.',
      guidePromptOption: 'We have a project and need guidance',
      guideResultSentence: 'Grant Ready offers guided readiness and initial submissions to help you shape your project concept and approach matched funders.',
      whatItIs:
        'Grant Ready provides guided readiness and initial grant submissions for ministries that have a defined need or program and want experienced guidance to prepare and submit.',
      whoItIsFor:
        'Churches and Christian nonprofits that have a ministry project in mind and need professional help organizing project concepts, budgets, funding source reports, and initial proposals.',
      whatYouCanExpect: [
        'Review of your organization and project concept, including project budget preparation so your request is clear to funders.',
        'A customized funding source report identifying potential foundation, civic or community grant opportunities.',
        'Guided preparation and submission of your initial grant proposals with continual updates from our team.',
        'Direct, personal communication with our staff throughout every step of the readiness process.',
      ],
      hasSampleCopy: true,
    },
    {
      id: 'full-service',
      slug: '/services/full-service',
      name: 'Full Service',
      priceDisplay: 'Contact us for pricing.',
      ctaLabel: 'Book a free grant strategy call',
      ctaType: 'contact',
      shortSummary: 'Fully outsourced strategy and writing by a qualified, experienced grant-writing team.',
      guidePromptOption: 'We want the whole thing handled for us',
      guideResultSentence: 'Full Service gives you a fully qualified grant-writing team with years of experience to handle your strategy and writing from start to finish.',
      whatItIs:
        'Full Service is our fully outsourced grant strategy and writing partnership. You gain a fully qualified grant-writing team with years of experience, so you do not need to find, develop and equip in-house grant staff.',
      whoItIsFor:
        'Established churches, ministries and mission-driven nonprofits that want ongoing grant program management, proposal writing, and funder research handled by dedicated specialists.',
      whatYouCanExpect: [
        'Comprehensive grant program management, from researching aligned foundations and civic groups to drafting and preparing full proposals.',
        'Project concept development, project budget development, and ongoing funding source reports tailored to your mission.',
        'Grant proposal review and contract service structured around your organization’s goals.',
        'Continual updates and personal attention from a dedicated team that understands Christian ministry.',
      ],
      hasSampleCopy: true,
    },
    {
      id: 'government-grants',
      slug: '/services/government-grants',
      name: 'Government Grants',
      priceDisplay: 'Contact us for pricing.',
      ctaLabel: 'Book a free grant strategy call',
      ctaType: 'contact',
      shortSummary: 'Federal, state and local grant development for community-serving programs.',
      guidePromptOption: 'We are going after government funding',
      guideResultSentence: 'Government Grants provides specialized federal, state and local grant development for organizations pursuing public funding.',
      whatItIs:
        'Government Grants provides specialized development and proposal writing for federal, state and local government grant opportunities.',
      whoItIsFor:
        'Ministries, faith-based nonprofits, and community organizations operating programs that qualify for federal, state or local public funding.',
      whatYouCanExpect: [
        'Careful assessment of your program concept and organizational readiness for federal, state or local grant requirements.',
        'Structured project concept and project budget development aligned with public-sector application standards.',
        'Full proposal writing and document coordination so your leadership team can stay focused on serving people.',
        'Honest counsel on pursuing public grant opportunities without compromising your faith or your mission.',
      ],
      hasSampleCopy: true,
    },
  ] as ServicePackage[],

  additionalCapabilities: {
    heading: 'Additional development and consulting services',
    lead: 'Alongside our four core packages, Here-4-You Consulting provides specialized support across every stage of nonprofit and grant development. Proposals have been written for federal, state and local government, foundations and civic groups.',
    items: [
      {
        title: 'Nonprofit development services',
        description: 'Support for nonprofit formation, organizational development, training and fundraising.',
      },
      {
        title: 'Project concept development',
        description: 'Structured planning that includes developing a clear project budget and a targeted funding source report.',
      },
      {
        title: 'Grant proposal review',
        description: 'Careful evaluation and strengthening of draft proposals prepared by your staff before you submit.',
      },
      {
        title: 'Grant program management & contract service',
        description: 'Ongoing coordination of your grant calendar, applications, and development priorities through flexible contract service.',
      },
    ],
  },

  about: {
    seo: {
      title: 'About Us | Here-4-You Consulting (Established 2000)',
      description: 'We provide services to encourage, grow and support your organization. Learn about Here-4-You Consulting, our statement of faith, and our grant-writing team.',
    },
    introHeading: 'We provide services to encourage, grow and support your organization.',
    storyHeading: 'Our story since 2000',
    storyParagraphs: [
      'Established in 2000 in Front Royal, Virginia, Here-4-You Consulting serves churches, Christian ministries, and mission-driven nonprofits through program development, grant proposal writing, nonprofit formation, organizational development, training, and fundraising.',
      'Over the past two decades, we have assisted more than 600 nonprofits and ministries across 11 countries and secured or supported over $500M in funding. Our team has written proposals for federal, state and local government, foundations, and civic groups.',
      'While we serve a wide range of mission-driven organizations, our heart and specialty remain churches and Christian ministries. We believe that our abilities are God-given and should be used to glorify God and build His Kingdom. We give every client continual updates and personal attention, and we never use an automated phone answering service.',
    ],
    statementOfFaith: {
      heading: 'Statement of faith',
      summary:
        'Here-4-You Consulting holds to the inspired, authoritative and infallible Word of God; one eternal God existing in three persons—Father, Son and Holy Spirit; salvation by grace alone through faith in Jesus Christ; and the call of the Great Commission to share the Gospel and serve in Christ’s name.',
      carryoverNote: 'Full statement of faith carried over from the current site.',
    },
    teamHeading: 'Meet the team',
    portraitPlaceholderText: 'Professional portrait goes here',
    team: [
      {
        id: 'jeffrey-rodman',
        name: 'Dr. Jeffrey J. Rodman',
        credentials: 'CFRE, CGS',
        role: 'Founder, Certified Fund Raising Executive & Certified Grants Specialist',
        initials: 'JR',
        bioParagraphs: [
          'Dr. Jeffrey J. Rodman is the founder of Here-4-You Christian Grant Consulting. He is a Certified Fund Raising Executive (CFRE) and Certified Grants Specialist (CGS), as well as a public speaker, trainer, grant writer, and fundraiser.',
          'As a consultant, Dr. Rodman has written hundreds of grant proposals and secured millions of dollars for client organizations. Over the course of his work, he has had over 80% of his proposals funded and has secured over 90% of the dollars he applied for.',
          'He holds a PhD in Religion and an M.Ed. in Counseling and Development from George Mason University.',
        ],
        highlights: [
          'Over 80% of his grant proposals funded',
          'Over 90% of applied-for dollars secured',
          'PhD in Religion; M.Ed. in Counseling and Development (George Mason University)',
        ],
      },
      {
        id: 'tony-turley',
        name: 'Tony Turley',
        role: 'Grant Writer (with Here-4-You Consulting since 2007)',
        initials: 'TT',
        bioParagraphs: [
          'Tony Turley has served as a Grant Writer with Here-4-You Consulting since 2007, working closely with churches, Christian schools, and ministries to plan programs and craft thorough proposals.',
          'Before joining Here-4-You Consulting, Tony served as a high school administrator at a private school, a U.S. Air Force officer, and a senior manager in the private sector.',
          'He holds a B.S. in Accounting from Barton College and settled in the Shenandoah Valley in 2003.',
        ],
        highlights: [
          'Grant Writer with Here-4-You Consulting since 2007',
          'Former private high school administrator, U.S. Air Force officer, and private-sector senior manager',
          'B.S. in Accounting, Barton College · Shenandoah Valley resident since 2003',
        ],
      },
    ] as TeamMember[],
  },

  directory: {
    seo: {
      title: 'Christian Funding Directory | 8,000+ Funders | Here-4-You Consulting',
      description: 'Browse our curated database of more than 8,000 Christian and mission-aligned funding sources, verified and updated regularly. Free to browse with a free account.',
    },
    heading: 'Christian Funding Directory',
    lead: 'A curated database of Christian and mission-aligned funders with more than 8,000 listed sources, verified and updated regularly.',
    howItWorks: [
      {
        step: '01. Create a free account',
        detail: 'Register with your name, email, and ministry or organization name. The directory is free to browse with a free account.',
      },
      {
        step: '02. Search 8,000+ verified sources',
        detail: 'Members can search our regularly updated database of foundations, civic groups, and mission-aligned funders.',
      },
      {
        step: '03. Pair with expert strategy',
        detail: 'When you find promising sources, schedule a free strategy call with our team to discuss readiness and proposal writing.',
      },
    ],
    unchangedSystemNote: 'The live directory and member login stay exactly as they are today.',
    sampleRows: [
      {
        id: 'row-1',
        label: 'Sample listing',
        funderPlaceholder: 'Funder name placeholder (Family Foundation — Member view)',
        focusArea: 'Church Outreach & Youth Ministry',
        stateRegion: 'Virginia / Mid-Atlantic',
        funderType: 'Private Family Foundation',
        typicalAwardPlaceholder: 'Typical award range shown to logged-in members',
      },
      {
        id: 'row-2',
        label: 'Sample listing',
        funderPlaceholder: 'Funder name placeholder (Christian Charitable Trust — Member view)',
        focusArea: 'Christian Education & Discipleship',
        stateRegion: 'National (United States)',
        funderType: 'Christian Foundation',
        typicalAwardPlaceholder: 'Typical award range shown to logged-in members',
      },
      {
        id: 'row-3',
        label: 'Sample listing',
        funderPlaceholder: 'Funder name placeholder (Community Endowment — Member view)',
        focusArea: 'Food Pantry & Community Benevolence',
        stateRegion: 'Southeast / Multi-State',
        funderType: 'Community & Civic Funder',
        typicalAwardPlaceholder: 'Typical award range shown to logged-in members',
      },
      {
        id: 'row-4',
        label: 'Sample listing',
        funderPlaceholder: 'Funder name placeholder (Stewardship Foundation — Member view)',
        focusArea: 'Facility Improvement & Capital Projects',
        stateRegion: 'National (United States)',
        funderType: 'Private Foundation',
        typicalAwardPlaceholder: 'Typical award range shown to logged-in members',
      },
      {
        id: 'row-5',
        label: 'Sample listing',
        funderPlaceholder: 'Funder name placeholder (Missions & Relief Fund — Member view)',
        focusArea: 'International Missions & Evangelism',
        stateRegion: 'International / Global',
        funderType: 'Christian Foundation',
        typicalAwardPlaceholder: 'Typical award range shown to logged-in members',
      },
    ] as DirectorySampleRow[],
  },

  resources: {
    seo: {
      title: 'Grant Resources & FAQ | Here-4-You Consulting',
      description: 'Free downloads, Jump Start member resources, and answers to frequently asked questions about Christian grant writing.',
    },
    heading: 'Resources for ministries and nonprofits',
    lead: 'Practical guides, checklists, and honest answers to help your church or ministry prepare for grant seeking.',
    downloads: [
      {
        id: 'dl-1',
        title: 'Ministry Grant Readiness Checklist',
        description: 'A step-by-step checklist of the core organizational documents, leadership details, and project information needed before applying for grants.',
        formatLabel: 'PDF Guide · Free Download',
        isSampleCopy: true,
      },
      {
        id: 'dl-2',
        title: 'Project Concept & Budget Worksheet',
        description: 'An introductory worksheet for outlining your ministry program goals, community need, and project budget structure.',
        formatLabel: 'Worksheet · Free Download',
        isSampleCopy: true,
      },
      {
        id: 'dl-3',
        title: 'Preparing Your Church or Ministry for Foundation Grants',
        description: 'An overview of how foundations and civic groups review faith-based proposals and how to stay true to your mission.',
        formatLabel: 'Briefing Paper · Free Download',
        isSampleCopy: true,
      },
    ] as DownloadResource[],
    jumpStartResources: {
      heading: 'Jump Start Resources',
      badge: 'Members Only',
      description:
        'Enrolled Jump Start participants receive dedicated access to self-paced training modules, proposal templates, and planning tools. If you have already enrolled in Jump Start ($249), sign in through your member account to access your materials.',
      isSampleCopy: true,
    },
    faqs: [
      {
        id: 'faq-1',
        question: 'Do you give grants?',
        answer:
          'No. Here-4-You Consulting helps Christian ministries and churches secure grant funding. It is not a foundation or funding source and does not award grants, other funding, or donations of any kind. Do not use our contact form to request a grant or financial support.',
        isSampleCopy: false,
      },
      {
        id: 'faq-2',
        question: 'Can you guarantee funding?',
        answer:
          'No ethical grant writer or consulting firm can guarantee that a grant proposal will be funded, because final decisions always rest with the funding organization. What we can share is our verified track record: since 2000, Here-4-You Consulting has helped over 600 nonprofits and ministries secure or support $500M+ in funding, and our founder Dr. Jeffrey J. Rodman has had over 80% of his proposals funded and secured over 90% of the dollars he applied for.',
        isSampleCopy: true,
      },
      {
        id: 'faq-3',
        question: 'Will we have to water down our Christian faith to apply for grants?',
        answer:
          'Our core promise is to help you pursue grants without compromising your faith or your mission. During your strategy call and funding source research, we identify foundations, civic groups, and public programs that align with your organization’s work and beliefs.',
        isSampleCopy: true,
      },
      {
        id: 'faq-4',
        question: 'We are a small church or new ministry. Where should we start?',
        answer:
          'If you are brand new to grants, you can start by browsing our Christian Funding Directory with a free account, enrolling in our self-paced Jump Start training and templates ($249), or booking a free grant strategy call so we can advise you on your best first step.',
        isSampleCopy: true,
      },
      {
        id: 'faq-5',
        question: 'What types of grant funders do you write proposals for?',
        answer:
          'Our team has written proposals for federal, state and local government, private and Christian foundations, and civic groups. We also provide project concept development, project budgets, funding source reports, and grant proposal reviews.',
        isSampleCopy: true,
      },
      {
        id: 'faq-6',
        question: 'Who will we communicate with if we work together?',
        answer:
          'You will work directly with our consulting team. We provide continual updates and personal attention throughout every project, and we do not use an automated phone answering service.',
        isSampleCopy: true,
      },
    ] as FaqItem[],
  },

  contactPage: {
    seo: {
      title: 'Contact Us & Book a Free Strategy Call | Here-4-You Consulting',
      description: 'We would love to hear from you. Schedule a free grant strategy call or contact Here-4-You Consulting in Front Royal, Virginia.',
    },
    heading: 'We would love to hear from you.',
    lead: 'Call our office directly in Front Royal, Virginia, or send a message below to schedule your free grant strategy call and consultation.',
  },

  accountPages: {
    loginSeo: {
      title: 'Member Log In | Here-4-You Consulting',
      description: 'Log in to your Here-4-You Consulting account to access the Christian Funding Directory and Jump Start resources.',
    },
    accountSeo: {
      title: 'My Account | Here-4-You Consulting',
      description: 'Manage your Here-4-You Consulting member account, Christian Funding Directory access, and Jump Start resources.',
    },
    unchangedNote: 'The existing member system, Christian Funding Directory login, and Jump Start portal remain unchanged in the live site.',
  },
};
