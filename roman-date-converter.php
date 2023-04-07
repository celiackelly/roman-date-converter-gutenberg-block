<?php
/**
 * Plugin Name:       Roman Date Converter
 * Description:  	  A custom block for Wordpress Gutenberg that converts English dates to dates using the ancient Roman calendar. Scaffolded with Create Block and Ryan Welcher's Dynamic Block Template.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Celia Kelly + The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       roman-date-converter
 *
 * @package           create-block
 */

function create_block_roman_date_converter_block_init() {

	register_block_type(
		plugin_dir_path( __FILE__ ) . 'build',
		array(
			'render_callback' => 'create_block_roman_date_converter_render_callback',
		)
	);
}
add_action( 'init', 'create_block_roman_date_converter_block_init' );


function create_block_roman_date_converter_render_callback( $atts, $content, $block) {
	// Naming convention: '{namespace}-{blockname}-view-script'
	//Enqueing the script manually may not be necessary anymore- https://wordpress.stackexchange.com/questions/402946/does-viewscript-in-block-json-actually-enqueue-a-js-file
	wp_enqueue_script( 'create-block-roman-date-converter-view-script' );
	ob_start();
	require plugin_dir_path( __FILE__ ) . 'build/template.php';
	return ob_get_clean();
}