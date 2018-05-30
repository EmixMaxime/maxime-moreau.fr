<?php

return [
	'languages' => [
		[
			'name' => 'HTML/CSS',
			'class' => 'css',
			'level' => 'ninety',
			'description' => 'Utilisation du préprocesseur SASS afin de proposer un code maintenable. Compatible avec les anciens navigateurs ou récents selon les besoins.'
		],
		[
			'name' => 'Javascript',
			'class' => 'js',
			'level' => 'ninety',
			'description' => "Éxécuté par le navigateur ou NodeJS.
			Utilisation de l'ES6/7, le code est ensuite transpilé en fonction des besoins. Gulp et webpack sont de l'aventure."
		],
		[
			'name' => 'PHP',
			'class' => 'php',
			'level' => 'ninety',
			'description' => "Utilisation du framework Laravel ou Slim afin d'apporter une structure maintenable."
		],
		[
			'name' => 'Java',
			'class' => 'java',
			'level' => 'sixty',
			'description' => "Découverte de l'écosystème JAVA (J2EE et Android)."
		],
		[
			'name' => 'C',
			'class' => 'c',
			'level' => 'seventy',
			'description' => 'Les pointeurs et les "segmentation fault" n\'ont plus de secrets pour moi. Découverte de Rust également.'
		]

	],

	'sysadmin' => [

		[
			'name' => 'PostgreSQL',
			'class' => 'pgsql',
			'level' => 'seventy',
			'description' => "Parce qu'il n'y a pas que MySQL dans la vie !
			De la conception à la gestion et l'automatisation avec le langage PL/pgSQL."
		],
		[
			'name' => 'MongoDB',
			'class' => 'mongodb',
			'level' => 'sixty',
			'description' => "Savoir administrer une base de données NoSQL m'assure une grande polyvalence dû à l'émergence du BigData."
		],
		[
			'name' => 'Redis',
			'class' => 'redis',
			'level' => 'sixty',
			'description' => 'Cette base de données NoSQL est souvent utilisée pour booster les performances, elle est incontournable.',
		],
		[
			'name' => 'GNU/Linux',
			'class' => 'linux',
			'level' => 'seventy',
			'description' => "Administrer un serveur devient incontournable pour un développeur. Le terminal ne me fait plus peur, c'est devenu un ami quotidien."
		],
		[
			'name' => 'Ngnix',
			'class' => 'ngnix',
			'level' => 'seventy',
			'description' => 'La configuration des serveurs HTTP est primordiale. Capable également de gérer apache2 dans une moindre mesure.'
		]
	]

];