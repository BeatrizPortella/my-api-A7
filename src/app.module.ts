import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { WaterConsumptionModule } from './water-consumption/water-consumption.module';
import { AlertModule } from './alert/alert.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'water_consumption_db',
      entities: [],
      synchronize: true, // Use apenas no desenvolvimento, para criar o banco
    }),
    UserModule,
    WaterConsumptionModule,
    AlertModule,
  ],
})
export class AppModule {}
