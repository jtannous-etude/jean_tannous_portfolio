// Projects data — keep this minimal to avoid runtime errors if empty
export const projects = [
	{
		id: 1,
		title: { fr: "SAE – Création d’une base de données", en: 'SAE – Database project' },
		org: 'Université de La Rochelle',
		year: 2025,
		bullets: {
			fr: [
				'Analyse du besoin et modélisation (UML)',
				"Création et exploitation d'une base Oracle (SQL avancé, contraintes, vues)",
				'Requêtes complexes pour extraction de données'
			],
			en: [
				'Requirements analysis and modeling (UML)',
				'Creation and management of an Oracle database (advanced SQL, constraints, views)',
				'Complex queries for data extraction'
			]
		},
		tech: ['Oracle', 'SQL', 'UML'],
		image: '/src/assets/diagramme.png'
	},
	{
		id: 2,
		title: { fr: 'SAE – Développement d’un jeu vidéo en équipe', en: 'SAE – Team video game development' },
		org: 'Université de La Rochelle',
		year: 2025,
		bullets: {
			fr: [
				'Conception logicielle avec diagrammes UML (cas d’usage, classes)',
				"Développement en C++ avec la bibliothèque Qt",
				'Gestion de versions avec Git (travail collaboratif)'
			],
			en: [
				'Software design with UML diagrams (use cases, classes)',
				'Development in C++ using the Qt framework',
				'Version control with Git (collaborative work)'
			]
		},
		tech: ['C++', 'Qt', 'Git', 'UML'],
		image: '/src/assets/projet_jeu.png'
	}
	,
	{
		id: 3,
		title: { fr: "Site web React + FastAPI pour école de musique", en: 'React + FastAPI website for a music school' },
		org: 'Projet personnel / École de musique',
		year: 2024,
		bullets: {
			fr: [
				"Conception d'une interface réactive en React pour gestion des cours, professeurs et élèves",
				"API REST avec FastAPI et persistance SQLite",
				"Gestion des préinscriptions, Simulation des paiements en ligne et Gestion des recherches filtrées",
			],
			en: [
				"Designed a responsive React interface to manage courses, teachers and students",
				"Built a REST API with FastAPI and SQLite persistence",
				"Handled pre-registrations, simulated online payments, and implemented filtered searches",
			]
		},
		tech: ['React', 'FastAPI', 'Python', 'SQLite','CSS'],
		image: '/src/assets/site_musique.jpg'
	},
	{
		id: 4,
		title: { fr: "Mise en place d'un service réseau sous Linux", en: 'Deployment of a network service on Linux' },
		org: 'Mission technique',
		year: 2023,
		bullets: {
			fr: [
				"Installation et configuration d'un service réseau sous Linux (systemd) pour assurer disponibilité et redémarrage automatique",
				"Configuration réseau : routage, pare-feu avec nftables et règles de sécurité",
				"Automatisation pour déploiement reproductible et gestion des configurations",
				"Surveillance et logs centralisés pour supervision et alerting"
			],
			en: [
				"Installed and configured a network service on Linux (systemd) to ensure high availability and automatic restarts",
				"Network configuration: routing and firewalling using nftables with hardened security rules",
				"Automation for reproducible deployment and configuration management",
                "Monitoring and centralized logging for supervision and alerting"
			]
		},
		tech: ['Linux', 'systemd', 'nftables', 'raspbian','mise en place de documentation'],
		image: '/src/assets/linux.png'
	}
]
