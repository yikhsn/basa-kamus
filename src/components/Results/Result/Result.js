import React, { Component } from 'react';

import Box from '../ResultComponents/Box';
import Title from '../ResultComponents/Title';
import Content from '../ResultComponents/Content';
import Examples from '../ResultComponents/Examples';

class Translation extends Component{
    render(){
        const { translations, synonyms, examples, word_type, words } = this.props.datas;

        const renderTranslations = translations.length > 0 
            ? <Content 
                datas={translations}
                subtitle='Arti' />
            : null;

        const renderSynonyms = synonyms.length > 0 
            ? <Content 
                datas={synonyms}
                subtitle='Sinonim'
            />
            : null;

        const renderExamples = examples.length > 0
            ? <Examples
                examples={examples}
                subtitle='Contoh Kalimat'
            />
            : null;

        return(
            <Box>

                <Title
                    title={word_type}
                    words={words}
                />
            
                { renderTranslations }

                { renderSynonyms }

                { renderExamples }

            </Box>
        )
    }
}

export default Translation;