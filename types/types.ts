export interface StravaAuthResponse {
	access_token: string;
	refresh_token: string;
	expires_at: number;
}

export interface Activity {
	id: number;
	name: string;
	distance: number;
	elapsed_time: number;
	moving_time: number;
	total_elevation_gain: number;
	type: string;
	start_date: string; // ⚠️ Les dates sont retournées en `string`
	start_date_local: string;
	achievement_count: number;
	kudos_count: number;
	comment_count: number;
	start_latlng: number[];
	end_latlng: number[];
	average_speed: number;
	max_speed: number;
	average_watts?: number | null; // ✅ Correction ici
	max_watts?: number | null; // ✅ Correction ici
	weighted_average_watts?: number | null; // ✅ Correction ici
	kilojoules: number;
	average_heartrate?: number | null; // ✅ Correction ici
	max_heartrate?: number | null; // ✅ Correction ici
	elev_high: number;
	elev_low: number;
	pr_count: number;
	created_at?: string | null; // ✅ Correction ici
}
