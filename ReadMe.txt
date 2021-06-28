Template Name:	
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Al dente - HTML5 Restaurant Template
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Table of Contents:

1. 	Header Switching
	1a.	Changing the images in the slideshow header
	1.b Changing the video in the video header
	1.c Changing the static image in the header
	
2.	Contact Forms
	2a.	How to setup the forms

Template Version:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
1.0
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~	

Release Date:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
20/04/2016
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~	

Author:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Justin Audain - Audain Designs
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~	

Contact:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
web:http://themes.audaindesigns.com
email:info@audaindesigns.com
twitter:@audaindesigns
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



1. Header Switching

	This template comes with three header types, Static Image, Slideshow and Video.

	To switch between these headers do the following:

	File: index.html
	Line: 47
	Code: <body class="">

	Change this piece of code to either of the following.

	<body class=""> (static image)
	<body class="video"> (video header)
	<body class="slideshow"> (slideshow header)


	1.a Changing the images in the slideshow header

		To change the images in the header do the following:

		File: assets/js/main.js
		Line: 8-9
		Code: "assets/img/noodle.jpg"

		Chnage this piece of code to suit your needs, whether you have a image in the assets/img folder or hosted on line,
		an image hosting url it might look like this.

		"http://domain.com/imagename.jpg"


	1.b Changing the video in the video header

		To change the video in the header do the following:

		File: assets/js/main.js
		Line: 28-30
		Code: src: 'assets/video/video.mp4'
						
		Change this piece of code to suit your needs, if using a video hosting online that might tlook like this.

		'http://domain.com/videoname.mp4'
		
		The video also has a fallback image for mobile devices
		To change the image in the header do the following:

		File: assets/css/styles.css
		Line: 725
		Code: background-image:url('../../assets/img/video-fb.jpg');
						
		Change this piece of code to suit your needs.

		background-image:url('../../assets/img/my-video-image.jpg');
		
	1.c Changing the static image in the header

		To change the video in the header do the following:

		File: assets/css/styles.css
		Line: 144
		Code: background-image:url('../../assets/img/noodle.jpg');
						
		Change this piece of code to suit your needs.

		background-image:url('../../assets/img/our-food.jpg');


2. Contact forms

	This template uses two contact forms.

	File: assets/php/booking-form.php
	File: assets/php/contact-form.php
					

	2a. How to setup the forms

		To add your email to, and edit either of contact forms, do the following

		File: assets/php/booking-form.php
		File: assets/php/contact-form.php
		Line: 9
		Code: src: $to = 'hello@domain.com';
						
		Change this piece of code to suit your needs, for example.

		$to = 'myname@mywebsite.com';

		To change the subject messages in either of the contact forms, do the following

		File: assets/php/booking-form.php
		File: assets/php/contact-form.php
		Line: 14
		Code: $subject = "Reservation Request From: ".$_POST['name'].".";
						
		Change this piece of code to suit your needs, for example.

		$subject = "Table Booking Request From: ".$_POST['name'].".";