import { MongooseModule } from '@nestjs/mongoose';

const dbConnection = MongooseModule.forRoot(
    'mongodb+srv://romen:seexyajke123@cluster0.cdpsu.mongodb.net/discord?retryWrites=true&w=majority'
);

export default dbConnection;
