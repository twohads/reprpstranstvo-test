const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '10px',
    container: {
        maxWidth: '1140px',
        fields: '30px'
    },
    breakPoints: {
    	xxl: {
            width: "1600px",
            fields: "30px"
        },
        x1440: {
            width: "1370px",
            fields: "30px"
        },
    	xl: {
            width: "1280px",
            fields: "16px"
        },
        xl1080: {
            width: "1080px",
            fields: "16px"
        },
        md: {
            width: "992px",
            fields: "16px"
        },

        sm: {
            width: "768px",
            fields: "10px"
        },
        xs: {
            width: "576px",
            fields: "5px"
        },
        xxs: {
            width: "380px",
            fields: "5px"
        }
    },
    oldSizeStyle: false,
    properties: [
        'justify-content'
    ]
};

smartgrid('./src/precss', settings);