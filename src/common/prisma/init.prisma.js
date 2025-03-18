import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
async function testConnection() {
    try {
      // Thử lấy tất cả user từ cơ sở dữ liệu
      const users = await prisma.nguoi_dung.findMany(); 
      console.log('Database connection successful! ');
    } catch (error) {
      console.error('Database connection failed:', error);
    } finally {
      await prisma.$disconnect();
    }
  }
  
  testConnection();
export default prisma