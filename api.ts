import { supabase } from "@/lib/supabase-service";

export const getCityList = async () => {
  const { data: city, error } = await supabase.from("cities").select("*");
  if (error) return console.log("error", error);
  else return city;
};

export const postNewTrip = async ({ startDate, endDate, cityId }: any) => {
  const { data, error } = await supabase
    .from("trips")
    .insert([{ startDate, endDate, cityId }])
    .select();
  if (error) return console.log("error", error);
  else return data;
};
