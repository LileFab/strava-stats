import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async () => {
	const activities = await prisma.activities.findMany();
	const serializedActivities = activities.map((activity) => ({
		...activity,
		id: Number(activity.id), // ✅ Conversion de BigInt en Number
	}));
	return serializedActivities;
});
