#!/usr/bin/env node
/**
 * Cloudinary Setup Script for Earlington Legacy Initiative
 * Run: node scripts/setup-cloudinary.js
 */

require('dotenv').config();
const fs = require('fs').promises;
const path = require('path');

async function setup() {
  console.log('🔧 Setting up Cloudinary for Earlington Legacy Initiative\n');
  
  // Check for .env file
  const envPath = path.join(process.cwd(), '.env');
  try {
    await fs.access(envPath);
    console.log('✅ .env file exists');
  } catch {
    console.log('⚠️  .env file not found, creating template...');
    await createEnvFile();
  }
  
  // Check GitHub CLI installation
  console.log('\n📋 GitHub Environment Setup Instructions:');
  console.log('=========================================');
  console.log('1. Create environment via GitHub Website:');
  console.log('   - Go to: https://github.com/Timrex800/Earlington_Legacy_Initiative/settings/environments');
  console.log('   - Click "New environment"');
  console.log('   - Name: "production"');
  console.log('   - Click "Configure environment"');
  
  console.log('\n2. Add these secrets to environment:');
  console.log('   - CLOUDINARY_CLOUD_NAME = drj03twbh');
  console.log('   - CLOUDINARY_API_KEY = 966733913325885');
  console.log('   - CLOUDINARY_API_SECRET = WmDrOYQvMyNXQIpgL3_Ymv');
  
  console.log('\n3. Or use GitHub CLI commands:');
  console.log('   gh secret set CLOUDINARY_CLOUD_NAME -b"drj03twbh" --env production');
  console.log('   gh secret set CLOUDINARY_API_KEY -b"966733913325885" --env production');
  console.log('   gh secret set CLOUDINARY_API_SECRET -b"WmDrOYQvMyNXQIpgL3_Ymv" --env production');
  
  console.log('\n4. Test the workflow:');
  console.log('   - Commit and push changes');
  console.log('   - Check Actions tab in GitHub');
  console.log('   - Look for "Deploy to Cloudinary" workflow\n');
}

async function createEnvFile() {
  const envContent = `# Cloudinary Configuration for Earlington Legacy Initiative
# Add these values to GitHub Environment secrets with the same names

CLOUDINARY_CLOUD_NAME=drj03twbh
CLOUDINARY_API_KEY=966733913325885
CLOUDINARY_API_SECRET=WmDrOYQvMyNXQIpgL3_Ymv
CLOUDINARY_URL=cloudinary://966733913325885:WmDrOYQvMyNXQIpgL3_Ymv@drj03twbh

# Development overrides (optional)
# CLOUDINARY_DEV_FOLDER=earlington-legacy-dev
# CLOUDINARY_UPLOAD_PRESET=website_upload

# GitHub Environment
# NODE_ENV=production
`;
  
  await fs.writeFile('.env', envContent);
  await fs.writeFile('.env.example', envContent
    .replace(/drj03twbh/g, 'your_cloud_name')
    .replace(/966733913325885/g, 'your_api_key')
    .replace(/WmDrOYQvMyNXQIpgL3_Ymv/g, 'your_api_secret')
  );
  
  console.log('✅ Created .env and .env.example files');
}

// Create utility files
async function createUtilityFiles() {
  const cloudinaryConfig = `const cloudinary = require('cloudinary').v2;

/**
 * Cloudinary Configuration
 * Used by: Website image storage, optimization, and CDN delivery
 * Environment: Earlington Legacy Initiative
 */

const config = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'drj03twbh',
  api_key: process.env.CLOUDINARY_API_KEY || '966733913325885',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'WmDrOYQvMyNXQIpgL3_Ymv',
  secure: true
};

// Validate configuration
const isValidConfig = config.cloud_name && config.api_key && config.api_secret;

if (isValidConfig) {
  cloudinary.config(config);
  console.log(\`☁️  Cloudinary configured for cloud: \${config.cloud_name}\`);
} else {
  console.warn('⚠️  Cloudinary credentials incomplete. Running in development mode.');
}

// Utility functions
const cloudinaryUtils = {
  /**
   * Upload image to Cloudinary
   * @param {string} filePath - Local file path
   * @param {object} options - Upload options
   * @returns {Promise} Cloudinary response
   */
  uploadImage: async (filePath, options = {}) => {
    const defaultOptions = {
      folder: 'earlington-legacy',
      use_filename: true,
      unique_filename: false,
      overwrite: false,
      tags: ['earlington-website'],
      transformation: [
        { quality: 'auto', fetch_format: 'auto' }
      ]
    };
    
    try {
      return await cloudinary.uploader.upload(filePath, {
        ...defaultOptions,
        ...options
      });
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      throw error;
    }
  },
  
  /**
   * Generate optimized image URL
   * @param {string} publicId - Cloudinary public ID
   * @param {object} transformations - Image transformations
   * @returns {string} Optimized URL
   */
  getImageUrl: (publicId, transformations = {}) => {
    const defaults = {
      quality: 'auto',
      fetch_format: 'auto',
      width: transformations.width || 'auto',
      height: transformations.height || 'auto',
      crop: 'fill'
    };
    
    return cloudinary.url(publicId, { ...defaults, ...transformations });
  },
  
  /**
   * List all images in project folder
   * @returns {Promise} List of images
   */
  listImages: async () => {
    try {
      return await cloudinary.api.resources({
        type: 'upload',
        prefix: 'earlington-legacy/',
        max_results: 1000
      });
    } catch (error) {
      console.error('Error listing images:', error);
      throw error;
    }
  }
};

module.exports = {
  cloudinary,
  ...cloudinaryUtils
};`;

  await fs.mkdir('lib', { recursive: true });
  await fs.writeFile('lib/cloudinary.js', cloudinaryConfig);
  console.log('✅ Created lib/cloudinary.js');
}

// Run setup
setup().catch(console.error);
