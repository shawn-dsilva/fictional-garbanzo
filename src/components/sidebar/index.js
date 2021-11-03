import React, {useState} from 'react';
import Graph from './graph';
import CountrySelect from './country-select';
import ParameterSelect from './parameter-select';
import YearRangeSelect from './year-range-select';

export default function Sidebar() {
  const [options, setOptions] = useState([]);
  const [country, setCountry] = useState();
  const [datapoints, setDatapoints] = useState([])
  const [startYear, setStartYear] = useState(1990);
  const [endYear, setEndYear] = useState(2014);

  return (
    <div className="sidebar">
      <div className="dropdowns">
        <CountrySelect emissionType={options} setDatapoints={setDatapoints} datapoints={datapoints}/>
         <ParameterSelect options={options} setOptions={setOptions} datapoints={datapoints}/>
        <YearRangeSelect setStartYear={setStartYear} setEndYear={setEndYear}/>
      </div>
      <Graph countryList={datapoints} options={options} startYear={startYear} endYear={endYear}/>
    </div>
  );
}
