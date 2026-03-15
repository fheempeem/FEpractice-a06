import DateReserve from "@/components/DateReserve";
import { Select, MenuItem, TextField } from "@mui/material";

export default function Booking() {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl">New Booking</div>
            <div className="w-fit space-y-2 text-md text-left text-gray-600">
                <TextField name = "Name-Lastname" label="Name-Lastname" variant="standard" />
                <TextField name = "Contact-Number" label="Contact-Number" variant="standard" />
            </div>
            <div className="w-fit space-y-2 text-md text-left text-gray-600">
                <Select variant="standard" id = "venue" className="h-[2em] w-[200px]">
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>
            </div>
            <div>
                <DateReserve/>
            </div>
            
            <button className="w-[100px] block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" 
            name = "Book Venue">
                Book Venue
            </button>
        </main>
    );
}