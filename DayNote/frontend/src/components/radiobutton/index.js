import * as React from 'react';
import { amber, orange } from '@mui/material/colors';
import Radio from '@mui/material/Radio';

export default function ColorRadioButtons({ setFilter }) {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setFilter(event.target.value); 
        console.log(event.target.value); 
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    return (
        <>
            <div>
                <span>Todos: </span>
                <Radio
                    {...controlProps('a')}
                    sx={{
                        color: amber[500],
                        '&.Mui-checked': {
                            color: amber[900],
                        },
                    }}
                />
            </div>
            
            <div>
                <span>Normal: </span>
                <Radio {...controlProps('d')} color="default" />
            </div>
            
            <div>
                <span>Prioridade: </span>
                <Radio
                    {...controlProps('e')}
                    sx={{
                        color: orange[600],
                        '&.Mui-checked': {
                            color: orange[900],
                        },
                    }}
                />
            </div>
        </>
    );
}
