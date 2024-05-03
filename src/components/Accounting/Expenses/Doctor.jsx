import  { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

const Doctor = () => {
    const [singleSelections, setSingleSelections] = useState([]);
    const CategoryOptions: Array<OptionTypes> = [
        { id: 1, value: "Sample", label: "Sample" },
        { id: 2, value: "drJaneSmith", label: "Dr Jane Smith" }, 
        { id: 3, value: "drJohnDoe", label: "Dr John Doe" },
        { id: 4, value: "drJohnDoe", label: "Dr John Doe" },
        { id: 5, value: "drJaneSmith", label: "Dr Jane Smith" }, 
    ];

    const onChangeSingleSelection = (selected: OptionTypes[]) => {
        setSingleSelections(selected);
    };

    return (
        <div>
            <Typeahead
                id="select2"
                labelKey={"label"}
                multiple={false}
                onChange={onChangeSingleSelection}
                options={CategoryOptions}
                placeholder="Choose a doctor..."
                selected={singleSelections}
            />
        </div>
    );
};

export default Doctor;
