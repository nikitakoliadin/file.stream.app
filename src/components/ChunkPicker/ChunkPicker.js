import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import styles from './ChunkPicker.module.css';

class ChunkPicker extends Component {

    constructor(props, context) {
        super(props, context);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        const {setChunkSize} = this.props;
        setChunkSize(Number(event.target.value));
    }

    showListOfRadioButtons() {
        const {chunkSizeValues} = this.props;
        return chunkSizeValues.map((size, index) => {
            return (
                <FormControlLabel id={`radio-${index}`}
                                  key={`radio-${index}`}
                                  classes={{label: styles.FormControlLabel}}
                                  value={size.value.toString()}
                                  control={<Radio color={"secondary"}/>}
                                  label={size.key}
                                  labelPlacement={"top"}/>
            );
        });
    }

    render() {
        const {chunkPicker} = this.props;
        return (
            <div id={"ChunkPicker"}
                 className={styles.ChunkPicker}>
                <FormControl>
                    <FormLabel classes={{root: styles.FormLabel}}
                               focused={false}>
                        Chunk Size
                    </FormLabel>
                    <RadioGroup className={styles.RadioGroup}
                                value={chunkPicker.chunkSize.toString()}
                                aria-label={"position"}
                                name={"position"}
                                onChange={this.handleOnChange}>
                        {this.showListOfRadioButtons()}
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

ChunkPicker.propTypes = {
    chunkPicker: PropTypes.object.isRequired,
    chunkSizeValues: PropTypes.array.isRequired,
    setChunkSize: PropTypes.func.isRequired
};

export default ChunkPicker;
