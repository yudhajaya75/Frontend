
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const SelectMonth = () => (
    <select
        name="month"
        id="bulan"
        className='p-2 2xl:w-[130px] sm-440:text-[10px] 2xl:text-[14px] sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]'
    >
        <option value="" disabled selected>Bulan</option>
        {months.map((month, index) => (
            <option key={index} value={month}>{month}</option>
        ))}
    </select>
);

export default SelectMonth;
