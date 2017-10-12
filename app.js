var express			=	require('express');
var path			= 	require('path');
var favicon			=	require('serve-favicon');
var logger			=	require('morgan');
var cookieParser	=	require('cookie-parser');
var session			=	require('express-session');
var passport		=	require('passport');
var localStrategy	=	require('passport-local').Strategy;
var bodyParser		=	require('body-parser');
var multer			=	require('multer');
var flash			=	require('connect-flash');
var mongo			=	require('mongodb');
var mongoose		=	require('mongoose');
var db 				=	mongoose.connection;


var app = express();