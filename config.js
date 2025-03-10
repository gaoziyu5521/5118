var config = {
    style: 'mapbox://styles/mktaro/cm7yji9m400ve01sd8c933tts',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibWt0YXJvIiwiYSI6ImNtNnJieTd0bzF2MWsybXM0NHZmamM5c3MifQ.aYPJtrndw71Fp7Q6Pn9U2g',
    showMarkers: false,
    markerColor: '#F24738',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: ' Wandering Shopping Cart',
    subtitle: 'Urban Planning and Shopping Cart Abandonment: A Spatial Analysis',
    byline: 'By Gao Ziyu',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'homepage',
            alignment: 'left',
            hidden: false,
            title: 'Introduction',
            description: 'While exploring Singapore, I often come across abandoned supermarket shopping carts in unexpected places, even in areas with no supermarkets nearby. These carts can be found on grassy patches along streets, beneath HDB blocks, in corridors of certain floors, or even outside condominiums. <br> A CNA report mentioned that staff members have to retrieve around 20 abandoned shopping carts daily, often from locations as far as a 10-minute walk away. <br> Despite supermarkets’ ongoing efforts to educate customers, this phenomenon has led me to consider the issue from an urban perspective: <br> Which areas serve as the ‘final destinations’ for these stray shopping carts? <br> Why do these locations become dumping grounds for abandoned carts? <br> If I could collect data on these abandonment sites through community data gathering, would it reveal gaps in urban infrastructure planning? ',
            location: {
                center: [103.80616, 1.36195],
                zoom: 10.5,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'supermarket',
                    opacity: 0
                },
                {
                    layer: 'bus',
                    opacity: 0               
                },
                {
                    layer: 'buffer',
                    opacity: 0                
                },
                {
                    layer: 'supermarket-buffer-6vtr9d',
                    opacity: 0
                },
                {
                    layer: 'trolley-2h09tc',
                    opacity: 0
                },
                {
                    layer: 'resale-hdb-jan-june-2021-dit2wi',
                    opacity: 0
                },
                {
                    layer: 'busstop-buffer-c43htb',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'supermarket',
                    opacity: 0
                },
                {
                    layer: 'bus',
                    opacity: 0               
                },
                {
                    layer: 'buffer',
                    opacity: 0                
                },
                {
                    layer: 'supermarket-buffer-6vtr9d',
                    opacity: 0
                },
                {
                    layer: 'trolley-2h09tc',
                    opacity: 0
                },
                {
                    layer: 'resale-hdb-jan-june-2021-dit2wi',
                    opacity: 0
                },
                {
                    layer: 'busstop-buffer-c43htb',
                    opacity: 0
                }

            ]
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Access to Supermarkets and Abandoned Shopping Carts',
            //image: 'Week6-Website/asset/zhenzhu.png', 
            description: 'By overlaying the 500m accessibility radius of supermarkets with trolley abandonment spots, we can assess the effectiveness of the current supermarket distribution and identify potential gaps in accessibility that may contribute to trolley abandonment hotspots.',
            location: {
                center: [103.80616, 1.36195],
                zoom: 10.5 ,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'supermarket',
                    opacity: 1
                },
                {
                    layer: 'bus',
                    opacity: 0               
                },
                {
                    layer: 'buffer',
                    opacity: 0.7                
                },
                {
                    layer: 'busstop-buffer-c43htb',
                    opacity: 0                
                },
                {
                    layer: 'supermarket-buffer-6vtr9d',
                    opacity: 0.2
                },
                {
                    layer: 'trolley-2h09tc',
                    opacity: 1
                },
                {
                    layer: 'resale-hdb-jan-june-2021-dit2wi',
                    opacity: 0
                },

            ],
            onChapterExit: [
                {
                    layer: 'supermarket',
                    opacity: 1
                },
                {
                    layer: 'bus',
                    opacity: 0               
                },
                {
                    layer: 'buffer',
                    opacity: 0.7               
                },
                {
                    layer: 'busstop-buffer-c43htb',
                    opacity: 0                
                },
                {
                    layer: 'supermarket-buffer-6vtr9d',
                    opacity: 0.2
                },
                {
                    layer: 'trolley-2h09tc',
                    opacity: 1
                },
                {
                    layer: 'resale-hdb-jan-june-2021-dit2wi',
                    opacity: 0
                },
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Access to busstops and Abandoned Shopping Carts',
            //image: './assets/little India.png',
            description: 'By overlaying the 200m accessibility radius of bus stops with trolley abandonment spots, we can explore whether people tend to transport their purchased goods to the nearest public transit points before abandoning the trolleys.',
            location: {
                center: [103.80616, 1.36195],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'supermarket',
                    opacity: 0
                },
                {
                    layer: 'bus',
                    opacity: 0.1               
                },
                {
                    layer: 'buffer',
                    opacity: 0                
                },
                {
                    layer: 'busstop-buffer-c43htb',
                    opacity: 0.3                
                },
                {
                    layer: 'supermarket-buffer-6vtr9d',
                    opacity: 0
                },
                {
                    layer: 'trolley-2h09tc',
                    opacity: 1
                },
                {
                    layer: 'resale-hdb-jan-june-2021-dit2wi',
                    opacity: 0
                },
            ],
            onChapterExit: [
                {
                    layer: 'supermarket',
                    opacity: 0
                },
                {
                    layer: 'bus',
                    opacity: 1               
                },
                {
                    layer: 'buffer',
                    opacity: 0                
                },
                {
                    layer: 'busstop-buffer-c43htb',
                    opacity: 0.3                
                },
                {
                    layer: 'supermarket-buffer-6vtr9d',
                    opacity: 0
                },
                {
                    layer: 'trolley-2h09tc',
                    opacity: 1
                },
                {
                    layer: 'resale-hdb-jan-june-2021-dit2wi',
                    opacity: 0
                },
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Focused Analysis of Trolley Abandon spot',
            //image: './asses/haji lane.jpg',
            description: '<br><img src="asset/rivervale-crescent-abandoned-ntuc-trolleys-2.avif" style="max-height:500px; width:500px;display:block; margin:auto;">',
            location: {
                center: [103.9093, 1.3906],
                zoom: 15.7,
                pitch: 30,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'supermarket',
                    opacity: 0.3
                },
                {
                    layer: 'bus',
                    opacity: 0               
                },
                {
                    layer: 'buffer',
                    opacity: 0.4                
                },
                {
                    layer: 'supermarket-buffer-6vtr9d',
                    opacity: 0.2
                },
                {
                    layer: 'trolley-2h09tc',
                    opacity: 1
                },
                {
                    layer: 'resale-hdb-jan-june-2021-dit2wi',
                    opacity: 0
                },
                {
                    layer: 'busstop-buffer-c43htb',
                    opacity: 0.2                
                }
            ],
            onChapterExit: [
                {
                    layer: 'supermarket',
                    opacity: 0.3
                },
                {
                    layer: 'bus',
                    opacity: 0               
                },
                {
                    layer: 'buffer',
                    opacity: 0.4                
                },
                {
                    layer: 'supermarket-buffer-6vtr9d',
                    opacity: 0.2
                },
                {
                    layer: 'trolley-2h09tc',
                    opacity: 1
                },
                {
                    layer: 'resale-hdb-jan-june-2021-dit2wi',
                    opacity: 0
                },
                {
                    layer: 'busstop-buffer-c43htb',
                    opacity: 0.2                
                }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Focused Analysis of Trolley Abandon spot 2',
            //image: './assets/image/zhenzhu.png',
            description: '<br><img src="asset/zhen.jpg" style="max-height:500px; width:500px;display:block; margin:auto;">',
            location: {
                center: [103.8423, 1.2838],
                zoom: 15.7,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'supermarket',
                    opacity: 1
                },
                {
                    layer: 'bus',
                    opacity: 1               
                },
                {
                    layer: 'buffer',
                    opacity: 0.4                
                },
                {
                    layer: 'supermarket-buffer-6vtr9d',
                    opacity: 0.2
                },
                {
                    layer: 'trolley-2h09tc',
                    opacity: 1
                },
                {
                    layer: 'resale-hdb-jan-june-2021-dit2wi',
                    opacity: 0
                },
                {
                    layer: 'busstop-buffer-c43htb',
                    opacity: 0.2                
                }
            ],
            onChapterExit: [
                {
                    layer: 'supermarket',
                    opacity: 1
                },
                {
                    layer: 'bus',
                    opacity: 1               
                },
                {
                    layer: 'buffer',
                    opacity: 0.4                
                },
                {
                    layer: 'supermarket-buffer-6vtr9d',
                    opacity: 0.2
                },
                {
                    layer: 'trolley-2h09tc',
                    opacity: 1
                },
                {
                    layer: 'resale-hdb-jan-june-2021-dit2wi',
                    opacity: 0
                },
                {
                    layer: 'busstop-buffer-c43htb',
                    opacity: 0.2                
                }
            ]
        }
    ]
};


