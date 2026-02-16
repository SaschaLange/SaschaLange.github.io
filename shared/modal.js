/**
 * Project Modal Component
 * Reusable modal for displaying detailed project information
 */

// Project data - edit these to update modal content
const projectData = {
    'pipetting-workbench': {
        title: 'Digital Pipetting Workbench',
        role: 'System Lead · Frontend & UX',
        period: '2019 — Present',
        summary: 'Multi-platform application for manual liquid handling assistance. Scaled from pilot to GMP-validated workflow.',
        sections: [
            {
                heading: 'Overview',
                content: 'The Digital Pipetting Workbench is a comprehensive multi-platform application designed to assist laboratory technicians in performing precise manual liquid handling tasks. What started as a pilot project evolved into a GMP-validated workflow used in pharmaceutical drug discovery.'
            },
            {
                heading: 'Technical Challenges',
                content: 'The system needed to work across tablets, desktops, and projection surfaces while maintaining sub-milliliter precision guidance. I architected a responsive React application with real-time state synchronization, ensuring consistent UX whether technicians worked on iPad stands or wall-mounted displays.'
            },
            {
                heading: 'Impact',
                content: 'Successfully reduced pipetting errors by 40% and decreased training time for new technicians from 2 weeks to 3 days. The system now supports 15+ assay types and processes over 5,000 samples monthly in production environments.'
            },
            {
                heading: 'Tech Stack',
                content: 'React, TypeScript, Ionic Framework, Node.js, PostgreSQL, WebSocket real-time communication, OpenShift deployment'
            }
        ]
    },
    'freezer-system': {
        title: 'Autonomous Freezer System',
        role: 'Full Stack Engineering & UX',
        period: '2020 — 2023',
        summary: 'Web interface for automated sample storage and robotic retrieval in drug discovery workflows.',
        sections: [
            {
                heading: 'Overview',
                content: 'Built a full-stack web interface for controlling an automated freezer storage system with robotic sample retrieval. The system manages thousands of biological samples stored at -80°C with precise tracking and chain-of-custody requirements.'
            },
            {
                heading: 'Technical Implementation',
                content: 'Designed and implemented a React-based control interface communicating with PLC hardware through a Node.js middleware layer. Created an intuitive 3D visualization of freezer rack positions and implemented optimistic UI updates for smooth operator experience despite hardware communication latencies.'
            },
            {
                heading: 'Key Features',
                content: 'Real-time inventory tracking, automated retrieval queue optimization, temperature monitoring with alerting, full audit trail for regulatory compliance, barcode scanning integration, and collision-free robotic path planning visualization.'
            },
            {
                heading: 'Tech Stack',
                content: 'React, Node.js, Express, PostgreSQL, Three.js (3D visualization), MQTT protocol, Prisma ORM'
            }
        ]
    },
    'assay-modernization': {
        title: 'Legacy Assay Modernization',
        role: 'System Lead Delegate · Frontend & UX',
        period: '2021 — 2024',
        summary: 'Migrated LabVIEW-based measurement configuration system to modern web stack, improving stability and usability while expanding user access.',
        sections: [
            {
                heading: 'Challenge',
                content: 'A critical measurement configuration system built in LabVIEW had become a bottleneck — it crashed frequently, required local installation, and only one technician could operate it at a time. This created single-point-of-failure risks in production workflows.'
            },
            {
                heading: 'Solution',
                content: 'Led the migration to a browser-based React application with centralized data management. Reverse-engineered the LabVIEW logic, implemented comprehensive validation to ensure measurement parity, and designed an intuitive interface that reduced configuration time from 45 minutes to 12 minutes.'
            },
            {
                heading: 'Results',
                content: 'System uptime improved from 60% to 99.7%. Concurrent user support eliminated the bottleneck. Training time reduced by 70%. The web-based approach enabled remote access for off-site troubleshooting and configuration review.'
            },
            {
                heading: 'Tech Stack',
                content: 'React, TypeScript, Node.js, PostgreSQL, Material-UI, Jest/React Testing Library'
            }
        ]
    },
    'analytics-platform': {
        title: 'Mobile Analytics Platform',
        role: 'Frontend Engineering & UX',
        period: '2018 — Present',
        summary: 'Tablet-first app for in-vitro study data. Longest-running production system, used by 20+ technicians daily and 1000+ studies per year.',
        sections: [
            {
                heading: 'Overview',
                content: 'My first major project at Boehringer Ingelheim and the longest-running system I\'ve built. This tablet-optimized application enables laboratory technicians to capture, visualize, and analyze in-vitro study results directly at the bench.'
            },
            {
                heading: 'Design Philosophy',
                content: 'Conducted extensive user research with laboratory technicians to understand their workflow. The key insight: they wear gloves and work in sterile environments, so the interface needed large touch targets, minimal text input, and tolerance for imprecise taps. Designed a gesture-based navigation system optimized for gloved hands.'
            },
            {
                heading: 'Scale & Impact',
                content: 'Processes data from 1000+ studies annually. Used by 20+ technicians daily across multiple laboratory sites. Reduced data entry errors by 60% compared to the previous paper-based workflow. The system has maintained 99.5% uptime over 6+ years of continuous operation.'
            },
            {
                heading: 'Tech Stack',
                content: 'Ionic Framework, Angular, TypeScript, SQLite (offline-first), Cordova plugins, Chart.js'
            }
        ]
    }
};

// Modal management
class ProjectModal {
    constructor() {
        this.backdrop = null;
        this.container = null;
        this.isOpen = false;
        this.init();
    }

    init() {
        // Create modal elements
        this.createModalElements();
        
        // Bind click handlers to project cards
        document.querySelectorAll('[data-project-id]').forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const projectId = card.dataset.projectId;
                this.open(projectId);
            });
        });
    }

    createModalElements() {
        // Create backdrop
        this.backdrop = document.createElement('div');
        this.backdrop.className = 'modal-backdrop';
        this.backdrop.addEventListener('click', () => this.close());
        document.body.appendChild(this.backdrop);

        // Create modal container
        this.container = document.createElement('div');
        this.container.className = 'modal-container';
        this.container.innerHTML = `
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="p-6 border-b border-gray-200 dark:border-gray-700 flex items-start justify-between">
                    <div class="flex-1">
                        <h3 id="modal-title" class="text-2xl font-bold mb-2"></h3>
                        <p id="modal-role" class="text-sm text-accent-500 font-medium"></p>
                        <p id="modal-period" class="text-xs text-gray-500 dark:text-gray-400 mt-1"></p>
                    </div>
                    <button onclick="window.projectModal.close()" class="ml-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" aria-label="Close modal">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <div id="modal-body" class="p-6 space-y-6"></div>
            </div>
        `;
        this.container.addEventListener('click', () => this.close());
        document.body.appendChild(this.container);
    }

    open(projectId) {
        const project = projectData[projectId];
        if (!project) return;

        // Populate modal content
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-role').textContent = project.role;
        document.getElementById('modal-period').textContent = project.period;

        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">${project.summary}</p>
            ${project.sections.map(section => `
                <div>
                    <h4 class="text-lg font-semibold mb-2">${section.heading}</h4>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">${section.content}</p>
                </div>
            `).join('')}
        `;

        // Show modal
        document.body.style.overflow = 'hidden';
        this.backdrop.classList.add('active');
        this.container.classList.add('active');
        this.isOpen = true;
    }

    close() {
        document.body.style.overflow = '';
        this.backdrop.classList.remove('active');
        this.container.classList.remove('active');
        this.isOpen = false;
    }
}

// Initialize modal when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.projectModal = new ProjectModal();
    });
} else {
    window.projectModal = new ProjectModal();
}