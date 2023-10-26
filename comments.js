//Create web server

// Import express
const express = require('express');
const { nextTick } = require('process');

// Create router
const router = express.Router();

// Import comment model
const Comment = require('../models/comment');

// Import post model
const Post = require('../models/post');

// Import auth middleware
const auth = require('../middleware/auth');

// Import error handler
const errorHandler = require('../utils/errorHandler');

// Import comment validator
const commentValidator = require('../validators/commentValidator');

// Import comment edit validator
const commentEditValidator = require('../validators/commentEditValidator');

// Import comment reply validator
const commentReplyValidator = require('../validators/commentReplyValidator');

// Import comment reply edit validator
const commentReplyEditValidator = require('../validators/commentReplyEditValidator');

// Import comment delete validator
const commentDeleteValidator = require('../validators/commentDeleteValidator');

// Import comment reply delete validator
const commentReplyDeleteValidator = require('../validators/commentReplyDeleteValidator');

// Import comment like validator
const commentLikeValidator = require('../validators/commentLikeValidator');

// Import comment reply like validator
const commentReplyLikeValidator = require('../validators/commentReplyLikeValidator');

// Import comment dislike validator
const commentDislikeValidator = require('../validators/commentDislikeValidator');

// Import comment reply dislike validator
const commentReplyDislikeValidator = require('../validators/commentReplyDislikeValidator');

// Import comment reply like validator
const commentReplyLikeValidator = require('../validators/commentReplyLikeValidator');

// Import comment reply dislike validator
const commentReplyDislikeValidator = require('../validators/commentReplyDislikeValidator');

// Import comment reply like validator
const commentReplyLikeValidator = require('../validators/commentReplyLikeValidator');

// Import comment reply dislike validator
const commentReplyDislikeValidator = require('../validators/commentReplyDislikeValidator');

// Import comment reply like validator
const commentReplyLikeValidator = require('../validators/commentReplyLikeValidator');

// Import comment reply dislike validator
const commentReplyDislikeValidator = require('../validators/commentReplyDislikeValidator');

// Import comment reply like validator
const commentReplyLikeValidator = require('../validators/commentReplyLikeValidator');

// Import comment reply dislike validator
const commentReplyDislikeValidator = require('../validators/commentReplyDislikeValidator');

// Import comment reply like validator
const commentReplyLikeValidator = require('../validators/commentReplyLikeValidator');

// Import comment reply dislike validator
const commentReplyDislikeValidator = require('../validators/commentReplyDislikeValidator');

// Import
