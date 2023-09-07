
const SelectYear = () => (
    <select
        name="year"
        id="tahun"
        className='p-2 2xl:w-[130px] sm-440:text-[10px] 2xl:text-[14px] sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]'
    >
        <option value="" disabled selected>Tahun</option>
        {[...Array(44)].map((_, index) => (
            <option key={index} value={1980 + index}>{1980 + index}</option>
        ))}
    </select>
);

export default SelectYear;
