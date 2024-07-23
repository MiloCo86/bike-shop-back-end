\c bikes_dev;

INSERT INTO bikes (make, model, year, price, bike_type, frame, bike_weight, is_new, in_stock, img_url) VALUES
('Trek', 'FX Sport 4', 2022, 1799.99, 'Urban', 'Carbon', 32, true, 2, 'https://media.trekbikes.com/image/upload/c_pad,f_auto,w_690,h_690,q_auto,fl_strip_profile/FXSport4Carbon_22_35785_B_Primary'),
('Cannondale', 'Topstone 4', 2022, 1300.00, 'Road', 'Lightweight', 28, false, 1, 'https://www.sefiles.net/images/library/zoom/cannondale-topstone-4-386396-1.png'),
('Specialized', 'Rockhopper', 2023, 1200.00, 'Mountain', 'Aluminum', 29, true, 3, 'https://assets.specialized.com/i/specialized/91822-76_ROCKHOPPER-29-TARBLK-WHT_HERO'),
('Giant', 'Escape 3', 2022, 450.00, 'Hybrid', 'Aluminum', 26, false, 5, 'https://www.sefiles.net/images/library/zoom/giant-escape-3-disc-383035-12.jpg'),
('Santa Cruz', 'Chameleon', 2023, 2100.00, 'Mountain', 'Carbon', 27, false, 2, 'https://www.jensonusa.com/globalassets/digizuite/46607-en-bi004196-black.jpg'),
('Scott', 'Addict 20', 2022, 2300.00, 'Road', 'Carbon', 19, true, 1, 'https://140625705.cdn6.editmysite.com/uploads/1/4/0/6/140625705/s490024872571243371_p642_i2_w600.png'),
('Bianchi', 'Aria', 2023, 2700.00, 'Road', 'Carbon', 18, true, 1, 'https://www.bianchi.com/store/pub/media/catalog/product/cache/df8fd7705d6797f1ec7e35595b9ba832/Y/R/YRB8DT552R_RENDER_9.jpg'),
('Cube', 'Attain SL', 2022, 1600.00, 'Road', 'Aluminum', 22, true, 4, 'https://d2yn9m4p3q9iyv.cloudfront.net/cube/2021/attain-sl/thumbs/1000/8f610.webp'),
('Raleigh', 'Detour 2', 2023, 500.00, 'Hybrid', 'Steel', 30, true, 6, 'https://www.sefiles.net/images/library/large/raleigh-detour-2-376173-1.png'),
('Norco', 'Fluid FS 3', 2022, 2000.00, 'Mountain', 'Aluminum', 33, false, 2, 'https://d2yn9m4p3q9iyv.cloudfront.net/norco/2021/fluid-fs-3-29/thumbs/1000/f74aa.webp'),
('Kona', 'Rove AL 650', 2022, 999.00, 'Gravel', 'Aluminum', 25, true, 3, 'https://www.konaworld.com/cdn/shop/files/my23_rove_al_650.jpg'),
('Merida', 'Silex 400', 2023, 1800.00, 'Gravel', 'Aluminum', 24, true, 2, 'https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//master/bikes/2022_Mockups_Assemblings/SILEX_400_blublk_MOC22_1.tif?p3'),
('GT', 'Grade Expert', 2022, 1900.00, 'Gravel', 'Aluminum', 23, false, 1, 'https://d2yn9m4p3q9iyv.cloudfront.net/gt/2020/grade-expert/thumbs/1000/90347.webp'),
('Fuji', 'Jari 2.3', 2023, 1500.00, 'Gravel', 'Steel', 27, false, 3, 'https://d2yn9m4p3q9iyv.cloudfront.net/fuji/2020/jari-2.3/thumbs/1000/cae78.jpeg'),
('Marin', 'Headlands 1', 2022, 2200.00, 'Gravel', 'Carbon', 22, false, 2, 'https://s3.us-east-1.amazonaws.com/craft-marinbikes/images/2020/_1200x630_crop_center-center_82_none/2022-Headlands-1.jpg?mtime=1676549871'),
('Surly', 'Ogre', 2023, 1750.00, 'Touring', 'Steel', 30, true, 2, 'https://www.sefiles.net/images/library/zoom/surly-ogre-640746-14.jpg'),
('Cannondale', 'Quick CX 3', 2022, 725.00, 'Hybrid', 'Aluminum', 28, true, 4, 'https://embed.widencdn.net/img/dorelrl/ucztga6yjc/2000px@1x/C21_C31351M_Quick_CX_3_AGV_PD.png'),
('Electra', 'Townie 7D', 2023, 629.99, 'Cruiser', 'Aluminum', 35, true, 5, 'https://www.sefiles.net/images/library/zoom/electra-townie-original-7d-eq-26-inch-step-over-368608-14.jpg'),
('Yeti', 'SB115', 2023, 5400.00, 'Mountain', 'Carbon', 28, false, 1, 'https://d2yn9m4p3q9iyv.cloudfront.net/yeti/2021/sb115-tseries-t2/thumbs/1000/b07ed.webp'),
('Cervelo', 'Aspero', 2023, 3000.00, 'Gravel', 'Carbon', 20, true, 2, 'https://www.strictlybicycles.com/cdn/shop/files/0I1ALAXF2CForce.jpg'),
('Pivot', 'Mach 6', 2023, 6200.00, 'Mountain', 'Carbon', 27, true, 1, 'https://p.vitalmtb.com/photos/products/28040/photos/52929/original_2020_Pivot_Mach_6_Carbon_Aqua_Blue_Pro_X01_build_pictured.png'),
('Orbea', 'Terra H30', 2022, 1900.00, 'Gravel', 'Aluminum', 23, false, 2, 'https://www.sefiles.net/images/library/zoom/orbea-terra-h30-1x-399443-11.jpg'),
('Salsa', 'Cutthroat', 2023, 4500.00, 'Touring', 'Carbon', 24, true, 1, 'https://www.salsacycles.com/assets/2019_Cutthroat_Force1_Blue-uc-1.jpg'),
('Ribble', 'Endurance SL', 2023, 3200.00, 'Road', 'Carbon', 17, true, 3, 'https://cdn.speedsize.com/4190f681-07cb-43aa-92d2-6096b01e7b62/https://checkout.ribblecycles.co.uk/media/catalog/product/e/n/end_sldisc_red_dura-acedi2_bendsld9200d_hero_1.png'),
('Brompton', 'M6L', 2022, 1800.00, 'Folding', 'Steel', 26, false, 4, 'https://justridela.com/wp-content/uploads/2021/06/electric_c_line_explore_mid_bar_gloss_black_2.jpg'),
('Colnago', 'V3', 2023, 5000.00, 'Road', 'Carbon', 16, true, 2, 'https://www.bellatisport.com/shop/images/products//7665.jpg'),
('Canyon', 'Spectral 6', 2022, 3800.00, 'Mountain', 'Carbon', 31, false, 1, 'https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dwd46ba14a/images/full/full_2022_/2022/full_2022_spectral-6_3185_or-or_P5.png'),
('Liv', 'Devote 2', 2023, 1700.00, 'Gravel', 'Aluminum', 24, true, 5, 'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_600%2Cq_80%2Cw_800/tklefa0vtzuiuytbdynt/210709_GIANT_ECOM_LIV_Devote_Blue_0628_.jpg'),
('Argon 18', 'Krypton Pro', 2022, 5800.00, 'Road', 'Carbon', 18, false, 1, 'https://cdn.shopify.com/s/files/1/0860/9728/files/Argon-18-Krypton-Pro-All-Road-Crystal-Black-Copper.jpg'),
('Niner', 'RLT 9 RDO', 2023, 4200.00, 'Gravel', 'Carbon', 23, true, 2, 'https://www.sefiles.net/images/library/zoom/niner-rlt-9-rdo-3-star-387989-11.jpg'),
('Devinci', 'Hatchet', 2022, 2400.00, 'Gravel', 'Aluminum', 27, false, 3, 'https://bikepacking.com/wp-content/uploads/2020/10/2021-devinci-hatchet_3.jpg');

INSERT INTO shopCart (id, make, model, price, img_url,quantity) VALUES
(1, 'Trek', 'FX Sport 4', 1799.99,'https://media.trekbikes.com/image/upload/c_pad,f_auto,w_690,h_690,q_auto,fl_strip_profile/FXSport4Carbon_22_35785_B_Primary', 1),
(2, 'Cannondale', 'Topstone 4', 1300.00,'https://www.sefiles.net/images/library/zoom/cannondale-topstone-4-386396-1.png', 1),
(5, 'Santa Cruz', 'Chameleon', 2100.00, 'https://www.jensonusa.com/globalassets/digizuite/46607-en-bi004196-black.jpg' , 3),
(12, 'Merida', 'Silex 400', 1800.00, 'https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//master/bikes/2022_Mockups_Assemblings/SILEX_400_blublk_MOC22_1.tif?p3', 2);


