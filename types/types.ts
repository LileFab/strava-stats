export interface StravaAuthResponse {
	access_token: string;
	refresh_token: string;
	expires_at: number;
}

export interface Activity {
	id: number;
	name: string;
	distance: number;
	moving_time: number;
	elapsed_time: number;
	total_elevation_gain: number;
	type: string;
	start_date: string; // ⚠️ Prisma renvoie une `string`, pas `Date`
	start_date_local: string;
	achievement_count: number;
	kudos_count: number;
	comment_count: number;
	start_latlng: number[];
	end_latlng: number[];
	average_speed: number;
	max_speed: number;
	average_watts?: number;
	max_watts?: number;
	weighted_average_watts?: number;
	kilojoules: number;
	average_heartrate?: number;
	max_heartrate?: number;
	elev_high: number;
	elev_low: number;
	pr_count: number;
	created_at?: string; // Timestamp en string
}
