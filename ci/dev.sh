export BOT_DIR=./src/bot

echo "copying .env file to $BOT_DIR"
cp .env $BOT_DIR
cd $BOT_DIR
npm run dev
