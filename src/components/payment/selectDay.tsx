
const SelectDay = () => (
    <select
        name="day"
        id="tanggal"
        className='p-2 2xl:w-[130px] sm-440:text-[10px] 2xl:text-[14px] sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]'
        data-te-select-placeholder="Example placeholder"
    >
        <option value="" disabled selected>Tanggal</option>
        {[...Array(31)].map((_, index) => (
            <option key={index} value={index + 1}>{index + 1}</option>
        ))}
    </select>
);

export default SelectDay;
