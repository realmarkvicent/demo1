<?php



/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'myprofile' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '5*Yr-bBS4uyq3GgW?M*kwFu0MJjH$L7y^0>!t2&Cx(lK#0IH2 i&_;3u`QtzSCKY' );
define( 'SECURE_AUTH_KEY',   '!kyk0pdrmj:X0=DGm3|cMvi5J%Sh7K?e%*WU7zVCQ^+a]7Jz]&?SWQ`s^m]IVmVO' );
define( 'LOGGED_IN_KEY',     'AR:UvM9#ZDL^G#J474T<6-S`-Ro_`#6K(p3$j}j3d@5bKI6W!HROEh0xdYyrkQ$:' );
define( 'NONCE_KEY',         'PE(>~?;YPAryu Tf699xu#)KO+JI$9txe_`G*T)i^oqz;;4YRT]@oG3]vS@m@hOG' );
define( 'AUTH_SALT',         '|+Oa%)9_FUH6A?9`L-7aO)js.[d{;+j740{ L`2F%k}b7_Nkce|^pyaOt@-Zcj/ ' );
define( 'SECURE_AUTH_SALT',  'Z<1e^Kv1nkmQ{+ @Q,*w}i#{CLEJ%V~iq0_P|8fB]$H$/5H5=,qWg r&vLd)5tz<' );
define( 'LOGGED_IN_SALT',    '{CA~:v?#_w;!#1y,v%NNKEHIL8-kvY-A2b.&g.0d_I*qqJLCm/lN4;jtOa9,^t&L' );
define( 'NONCE_SALT',        'zoORgrF>fb[}SlRDx&moCYe|{{zs!;y,8*Dr{Qa To3[oiXwvwXcyffCpKbtd48g' );
define( 'WP_CACHE_KEY_SALT', 'l)fm+]Zbiy;nt:@1s~F)m(_+)&aQwmN0~6[Tz:u5?v|47Bps21Qp_P`,^oNDi.4d' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
define('DISALLOW_FILE_EDIT',true);


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', false );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
