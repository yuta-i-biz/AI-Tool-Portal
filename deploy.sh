#!/bin/bash
# AI Tool Portal - Deployment Script
# Usage: ./deploy.sh [PROJECT_ID]

PROJECT_ID=$1

if [ -z "$PROJECT_ID" ]; then
  echo "Usage: ./deploy.sh [PROJECT_ID]"
  exit 1
fi

echo "🚀 Deploying AI Tool Portal to Google Cloud Run..."
gcloud run deploy ai-tool-portal \
  --source . \
  --project $PROJECT_ID \
  --region asia-northeast1 \
  --allow-unauthenticated
