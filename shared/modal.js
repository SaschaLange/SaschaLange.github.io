/**
 * Project Modal Component
 * Reusable modal for displaying detailed project information
 */

// Project data - edit these to update modal content
const projectData = {
'pipetting-workbench': {
    "title": "Digital Pipetting Workbench",
    "role": "System Lead · Frontend & UX",
    "period": "2023 — Present",
    "summary": "Hardware-agnostic PWA for guided liquid handling. Scaled from an experimental pilot to a GMP-validated system featuring deep bluetooth hardware integration.",
    "sections": [
            {
                "heading": "Overview",
                "content": "The Digital Pipetting Workbench is a high-precision guidance system designed to bridge the gap between manual dexterity and digital accuracy in pharmaceutical drug discovery. By focusing on a low barrier of entry, the tool was made available company-wide, allowing laboratories to digitize workflows with minimal overhead while remaining fully compliant with GMP-validated environments."
            },
            {
                "heading": "Technical Challenges",
                "content": "The core challenge involved building a reliable bridge between the browser and laboratory hardware. <br/><br/><b>Hardware Integration:</b> Developed a robust, queue-based serial communication architecture using the Web Bluetooth API to remotely control electronic pipetting hardware. This ensured stable command execution, automated volume settings, and real-time state synchronization between the device and the UI.<br/><br/><b>Spatial UX:</b> Engineered a responsive interface that adapts to specific lab modalities: handheld tablets for single-plate tasks and large touchscreen tabletops for complex multi-plate dilutions and multiplication scenarios.<br/><br/><b>Data Resilience:</b> Implemented offline capabilities through protocol templates that can be configured via Excel or automatically generated from LIMS, facilitating easy knowledge sharing and standardized documentation.<br/>"
            },
            {
                "heading": "Impact",
                "content": "Successfully transitioned a pilot project into a production-ready internal product. The system significantly reduced manual pipetting errors and cycle times by automating volume and mode settings on the hardware. Its flexible deployment—optimized for Microsoft Edge—ensured a scalable, reliable solution now used across several critical sample preparation workflows."
            },
            {
                "heading": "Tech Stack",
                "content": "React, TypeScript, Ionic Framework, Web Bluetooth API, Serial Communication, Jenkins, OpenShift"
            }
        ]
    },
    'freezer-system': {
        "title": "Automated Biorepository Orchestration System",
        "role": "Full Stack Engineering & UX",
        "period": "2023 — Present",
        "summary": "A high-throughput, kiosk-driven interface for automated robotic cold-storage. Streamlined cross-departmental sample transfers from manual handovers to a 'Fast-Food Kiosk' style check-in process.",
        "sections": [
            {
                "heading": "Overview",
                "content": "In pharmaceutical drug discovery, the transition of samples between therapeutic areas and analytical labs is a critical bottleneck. I led the design and development of a centralized Kiosk system that interfaces with large-scale robotic freezers. This system transformed a complex manual logging process into a seamless, self-service experience for laboratory personnel, ensuring data integrity and sample traceability across departments."
            },
            {
                "heading": "Technical Challenges",
                "content": "Bridging Human & Robotic Workflows:<br/>The primary challenge was abstracting the complexity of robotic scheduling and hardware inventory placement into a 'zero-training' UI. I designed a kiosk interface that allows users to submit orders digitally and receive real-time visual feedback as the robotic freezer identifies, scans, and stores labware through automated turn-gates.<br/><br/>Backend Orchestration & Validation:<br/>While the user experience is intentionally simple, the backend manages high-complexity logic: verifying physical barcode scans against database records, initializing hardware-specific inventory slots, and synchronizing state with robotic scheduling software.<br/><br/>End-to-End Logistics:<br/>Beyond storage, the system manages 'Check-out' logic for consuming labs. This involves commissioning specific sample sets for robotic retrieval and coordinating the handover to either human technicians or autonomous mobile robots (AMRs) for downstream transport."
            },
            {
                "heading": "Impact",
                "content": "Currently driving a significant shift toward standardized, data-driven sample logistics. By automating inventory validation at the point of entry, the system has increased sample availability speeds and drastically reduced the need for manual troubleshooting. This centralized 'source of truth' has improved departmental accountability and provides a scalable foundation for future integration with autonomous transport systems."
            },
            {
                "heading": "Tech Stack",
                "content": "React, TypeScript, Ionic, Node.js, Express, Prisma, PostgreSQL, Robotic Middleware Integration, UX Research"
            }
        ]
    },
    'assay-modernization': {
    "title": "Assay Configuration Management System",
    "role": "System Lead Delegate · Full Stack Engineering & UX",
    "period": "2023 — 2025",
    "summary": "Full-scale modernization of a legacy LabView orchestration tool into a high-performance React/Node.js platform. Bridged 10+ years of technical debt to enable scalable assay configuration and data integrity.",
    "sections": [
        {
            "heading": "Overview",
            "content": "For over a decade, a business-critical assay configuration tool relied on a legacy LabView system with significant stability and usability constraints. As System Lead Delegate, I co-led the migration of this ecosystem to a modern web stack. The goal was to replace a fragile, file-based storage model with a centralized database architecture while ensuring 100% compatibility with downstream robotic analysis pipelines."
        },
        {
            "heading": "Technical Challenges",
            "content": "Legacy Deconstruction & UX Research:<br/>I conducted extensive user research and software auditing to deconstruct a 10-year-old system. By identifying critical vs. obsolete features, I translated legacy logic into a streamlined user flow. This process involved tight feedback loops with Subject Matter Experts (SMEs) to ensure the new system met the complex needs of the laboratory groups.<br/><br/>Modernizing Data Architecture:<br/>I collaborated on transitioning the system from decentralized .cfg files on shared drives to a structured PostgreSQL schema. This migration was the 'North Star' for our sprint planning, allowing us to implement advanced features like versioning, templating, and batch-editing that were previously impossible.<br/><br/>Collaborative Design & Prototyping:<br/>To manage the high density of laboratory data, I developed a complete component library and user flow in Klaxoon. This served as our architectural blueprint, enabling a team of four—including LabView and Software Engineers—to work in unison and validate progress against a unified vision."
        },
        {
            "heading": "Impact",
            "content": "The transition resulted in a high-performance, data-dense web application that eliminated the 'expert-only' bottleneck of the previous system. By introducing intuitive templating and robust error-handling, we significantly lowered the barrier for onboarding new users. The platform now provides a stable, scalable foundation for all automated analysis methods, drastically improving the reliability of the lab's configuration management."
        },
        {
            "heading": "Tech Stack",
            "content": "React, TypeScript, Ionic, Node.js, Express, Prisma, PostgreSQL, UX Research, Prototyping, Wireframing, User Testing "
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