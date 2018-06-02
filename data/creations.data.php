<?php

return [
	// [
	// 	'picture' => '',
	// 	'pictureAlt' => '',
	// 	'ref' => '',
	// 	'title' => '',
	// 	'description' => '',
	// 	'link' => '',
	// 	'linkValue' => ''
	// ]
	[
		'picture' => '24h-mini.png',
		'pictureAlt' => '',
		'ref' => 1,
		'title' => '24h IUT Informatique',
		'description' => $translator->trans('Site static généré avec webpack. <br/> Le plus gros challenge a été la deadline de 4 jours.'),
		'link' => 'https://maxime-moreau.fr/24h/index.html',
		'linkValue' => $translator->trans('Voir le site')
	],
	[
		'picture' => 'emixteachesme-mini.png',
		'pictureAlt' => '',
		'ref' => 2,
		'title' => 'Mxteachesme',
		'description' => $translator->trans("Plateforme d'apprentissage développée par mes propres soins."),
		'link' => 'https://mxteaches.me',
		'linkValue' => $translator->trans('Se rendre sur mxteaches.me')
	],
	[
		'picture' => 'sonolight-mini.png',
		'pictureAlt' => '',
		'ref' => 3,
		'title' => 'Sonolightmusic',
		'description' => $translator->trans('Ma première expérience. <br /> Site static HTML/CSS/JS avec le préprocesseur SASS et Gulp pour automatiser certaines tâches.'),
		'link' => '#',
		'linkValue' => $translator->trans('Indisponible')
	]

];