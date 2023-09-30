export default function ThumbsUp({ styles }: { styles: string }) {
  return (
    <svg
      role="img"
      class={styles}
      width="2000"
      height="2000"
      viewBox="0 0 2000 2000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Thumbs up</title>
      <path
        d="M946.971 824.021C945.487 824.027 944.017 823.724 942.656 823.129C939.999 821.991 937.901 819.845 936.822 817.162C935.744 814.48 935.773 811.479 936.902 808.818C960.299 754.614 963.395 680.69 965.652 626.741C967.328 587.012 968.529 558.298 976.359 544.187C983.186 531.897 993.401 523.868 1005.93 520.936C1021.88 517.295 1040.52 522.029 1058.51 534.464C1059.69 535.282 1060.7 536.324 1061.47 537.531C1062.25 538.737 1062.78 540.085 1063.04 541.497C1063.29 542.908 1063.27 544.357 1062.96 545.759C1062.66 547.161 1062.08 548.489 1061.26 549.668C1060.44 550.847 1059.4 551.853 1058.19 552.629C1056.99 553.405 1055.64 553.936 1054.23 554.191C1052.82 554.447 1051.37 554.421 1049.97 554.117C1048.56 553.812 1047.24 553.235 1046.06 552.417C1033.44 543.678 1020.57 539.945 1010.9 542.221C1004.36 543.75 999.318 547.847 995.458 554.784C990.142 564.398 988.849 595.132 987.483 627.615C985.153 683.294 982.021 759.548 956.949 817.467C956.101 819.409 954.706 821.064 952.935 822.227C951.163 823.391 949.091 824.015 946.971 824.021ZM766.606 1620.64C764.754 1620.65 762.932 1620.18 761.311 1619.28C759.689 1618.39 758.322 1617.1 757.338 1615.53C723.29 1561.23 685.691 1479.88 654.155 1392.32C623.621 1307.49 601.717 1225.86 592.485 1162.45C592.137 1160.06 592.592 1157.62 593.778 1155.51C594.964 1153.41 596.815 1151.75 599.04 1150.81C604.339 1148.57 610.147 1146.21 616.319 1143.68C635.383 1135.88 656.977 1127.05 679.518 1115.76C751.821 1079.49 776.201 1054.84 793.899 1024.51C798.87 1015.97 803.476 1006.74 808.338 996.94C815.766 982.028 824.197 965.131 836.523 945.248C855.368 914.914 879.475 884.143 910.21 851.169C912.185 849.049 914.921 847.801 917.817 847.698C920.712 847.596 923.53 848.648 925.65 850.623C927.77 852.598 929.018 855.334 929.121 858.23C929.223 861.125 928.171 863.943 926.196 866.063C896.426 898.036 873.175 927.659 855.095 956.774C843.296 975.801 835.067 992.206 827.893 1006.68C822.867 1016.8 818.097 1026.35 812.762 1035.5C793.061 1069.41 766.478 1096.59 689.278 1135.3C665.99 1146.97 643.012 1156.35 624.549 1163.9L615.354 1167.67C625.023 1228.43 645.961 1305.14 674.675 1384.93C704.299 1467.17 739.239 1543.64 771.285 1596.56L844.225 1571.52L1285.03 1406.85C1290.4 1404.85 1295.96 1406.63 1298.43 1411.8C1300.25 1414.31 1327.82 1446.92 1444.28 1375.61C1530.87 1322.55 1549.88 1300.32 1541.49 1262.28C1539.86 1255.34 1536.69 1248.86 1532.2 1243.32C1527.71 1237.79 1522.02 1233.34 1515.56 1230.33C1514.05 1229.7 1512.69 1228.74 1511.6 1227.52C1510.5 1226.3 1509.69 1224.85 1509.24 1223.28C1508.78 1221.71 1508.68 1220.05 1508.95 1218.43C1509.22 1216.82 1509.85 1215.28 1510.79 1213.94C1520.95 1199.61 1545.82 1157.39 1538.88 1134.46C1530.64 1107.22 1494.06 1094.68 1493.68 1094.68C1492.08 1094.15 1490.63 1093.27 1489.43 1092.09C1488.24 1090.91 1487.33 1089.48 1486.78 1087.89C1486.23 1086.31 1486.05 1084.62 1486.26 1082.95C1486.46 1081.29 1487.05 1079.69 1487.98 1078.29C1488.29 1077.82 1519.84 1028.46 1498.43 985.615C1489.32 967.316 1462.1 966.624 1461.83 966.624C1459.96 966.612 1458.12 966.121 1456.5 965.197C1454.87 964.273 1453.51 962.947 1452.55 961.347C1451.58 959.746 1451.04 957.925 1450.98 956.056C1450.92 954.187 1451.34 952.334 1452.2 950.674C1454.02 947.287 1494.31 866.919 1428.53 831.577C1427.24 830.913 1426.1 829.999 1425.17 828.889C1424.24 827.78 1423.54 826.496 1423.11 825.114C1422.68 823.732 1422.53 822.278 1422.67 820.837C1422.81 819.396 1423.23 817.997 1423.91 816.72C1424.6 815.444 1425.53 814.316 1426.65 813.402C1427.77 812.488 1429.06 811.807 1430.45 811.397C1431.84 810.987 1433.3 810.857 1434.73 811.014C1436.17 811.171 1437.57 811.613 1438.83 812.314C1474.23 831.286 1491 863.295 1487.34 905.173C1485.96 919.446 1482.7 933.473 1477.63 946.887C1490.76 949.927 1508.81 957.411 1518.04 975.892C1538.36 1016.53 1522.52 1059.19 1512.57 1079.02C1527.47 1086.3 1551.79 1101.82 1559.79 1128.18C1568.65 1157.46 1547.04 1197.83 1535.19 1216.69C1549.2 1226.4 1559.06 1241.01 1562.81 1257.64C1574.81 1311.5 1540.96 1342.05 1455.68 1394.34C1390.13 1434.4 1339.8 1450.06 1305.88 1440.75C1298.38 1438.84 1291.43 1435.18 1285.62 1430.06L851.781 1592.11L851.49 1592.2L770.138 1620.13C768.996 1620.5 767.803 1620.67 766.606 1620.64Z"
        fill="#101014"
      ></path>
      <path
        d="M1095.13 912.02C1093.51 912.025 1091.91 911.669 1090.44 910.979C1088.98 910.29 1087.68 909.283 1086.66 908.031C1085.63 906.78 1084.89 905.316 1084.5 903.745C1084.1 902.174 1084.07 900.535 1084.38 898.947C1084.68 897.509 1112.81 754.997 1095.69 649.502C1093.07 631.954 1088.51 614.752 1082.09 598.211C1081.54 596.879 1081.26 595.452 1081.26 594.012C1081.27 592.572 1081.56 591.146 1082.11 589.818C1082.67 588.49 1083.48 587.285 1084.51 586.272C1085.53 585.26 1086.75 584.46 1088.08 583.918C1089.42 583.377 1090.85 583.105 1092.29 583.118C1093.73 583.131 1095.15 583.428 1096.48 583.993C1097.8 584.559 1099 585.38 1100.01 586.411C1101.01 587.441 1101.8 588.661 1102.34 589.999C1109.37 608.057 1114.37 626.841 1117.25 646.006C1131.27 732.383 1116.81 838.825 1109.48 882.906C1138.61 870.361 1197.49 846.126 1257.87 827.718C1284.86 819.254 1312.35 812.468 1340.18 807.399C1341.61 807.13 1343.08 807.148 1344.5 807.452C1345.92 807.756 1347.26 808.341 1348.45 809.17C1349.64 810 1350.66 811.06 1351.44 812.286C1352.21 813.512 1352.74 814.881 1352.98 816.313C1353.22 817.745 1353.18 819.21 1352.85 820.624C1352.51 822.038 1351.91 823.371 1351.05 824.547C1350.2 825.722 1349.12 826.716 1347.88 827.47C1346.64 828.224 1345.26 828.723 1343.83 828.938C1316.9 833.854 1290.3 840.427 1264.19 848.621C1180.89 874.021 1100.32 910.746 1099.59 911.11C1098.18 911.726 1096.66 912.037 1095.13 912.02ZM1182.98 1072.21C1173.07 1072.39 1163.18 1071.17 1153.61 1068.57C1136.77 1063.63 1124.61 1054 1117.45 1039.87C1111.13 1027.44 1110.48 1013.75 1115.48 999.162C1139.77 928.298 1300.24 852.044 1307.05 848.821C1308.35 848.209 1309.75 847.859 1311.19 847.79C1312.62 847.721 1314.05 847.936 1315.4 848.421C1316.75 848.906 1318 849.653 1319.06 850.618C1320.12 851.583 1320.98 852.748 1321.59 854.047C1322.21 855.345 1322.56 856.751 1322.63 858.185C1322.69 859.619 1322.48 861.052 1321.99 862.403C1321.51 863.754 1320.76 864.996 1319.8 866.058C1318.83 867.121 1317.67 867.983 1316.37 868.595C1272.23 889.388 1153.83 954.663 1136.11 1006.26C1133.05 1015.17 1133.31 1022.92 1136.9 1029.93C1141.28 1038.58 1148.75 1044.35 1159.71 1047.58C1227.72 1067.37 1396.9 981.155 1456.37 946.232C1458.86 944.818 1461.82 944.443 1464.59 945.188C1467.36 945.932 1469.72 947.737 1471.18 950.211C1472.63 952.686 1473.05 955.632 1472.34 958.414C1471.64 961.195 1469.87 963.589 1467.42 965.077C1459.24 969.884 1283.74 1072.19 1182.98 1072.21Z"
        fill="#101014"
      ></path>
      <path
        d="M1196.93 1240.72C1189.02 1240.81 1181.14 1239.85 1173.49 1237.86C1155.29 1232.95 1142.32 1221.88 1135 1204.98C1119.98 1170.39 1139.92 1130.33 1194.23 1086.05C1219.62 1065.72 1246.77 1047.69 1275.37 1032.19C1277.93 1030.84 1280.92 1030.56 1283.69 1031.42C1286.46 1032.28 1288.77 1034.2 1290.12 1036.77C1291.47 1039.33 1291.75 1042.33 1290.89 1045.1C1290.03 1047.86 1288.11 1050.18 1285.54 1051.53C1241.84 1074.56 1133 1145.48 1155.05 1196.28C1159.66 1206.93 1167.56 1213.63 1179.19 1216.78C1250.2 1236.02 1428.11 1121.28 1490.65 1075.43C1492.99 1073.72 1495.91 1073 1498.78 1073.44C1501.64 1073.88 1504.21 1075.44 1505.93 1077.78C1507.64 1080.12 1508.36 1083.04 1507.92 1085.91C1507.48 1088.77 1505.92 1091.34 1503.58 1093.06C1462.65 1122.41 1420.23 1149.63 1376.49 1174.61C1298.76 1218.49 1238.55 1240.72 1196.93 1240.72Z"
        fill="#101014"
      ></path>
      <path
        d="M1261.95 1345.02C1254.5 1345.14 1247.08 1344.12 1239.93 1342.01C1233.61 1340.2 1227.78 1336.96 1222.9 1332.54C1218.03 1328.12 1214.23 1322.64 1211.8 1316.52C1184.91 1249.3 1273.25 1201.34 1277.02 1199.34C1278.29 1198.63 1279.69 1198.19 1281.13 1198.03C1282.57 1197.87 1284.03 1198 1285.42 1198.41C1286.81 1198.82 1288.11 1199.51 1289.23 1200.43C1290.35 1201.34 1291.28 1202.47 1291.96 1203.75C1292.65 1205.03 1293.07 1206.44 1293.2 1207.88C1293.33 1209.33 1293.18 1210.78 1292.74 1212.17C1292.31 1213.55 1291.6 1214.83 1290.67 1215.94C1289.73 1217.05 1288.58 1217.96 1287.29 1218.62C1286.54 1219.02 1212.46 1259.35 1232.09 1308.4C1234.65 1314.85 1239.24 1318.91 1246.51 1321.15C1301.37 1338.43 1457.99 1247.51 1513.7 1211.04C1514.9 1210.13 1516.26 1209.48 1517.72 1209.12C1519.17 1208.76 1520.69 1208.71 1522.16 1208.96C1523.64 1209.21 1525.05 1209.76 1526.31 1210.58C1527.56 1211.4 1528.63 1212.47 1529.46 1213.72C1530.28 1214.98 1530.84 1216.38 1531.1 1217.86C1531.35 1219.34 1531.3 1220.85 1530.95 1222.31C1530.59 1223.76 1529.94 1225.13 1529.04 1226.33C1528.13 1227.52 1526.99 1228.52 1525.68 1229.25C1525.16 1229.6 1473.32 1263.45 1413.34 1294.03C1346.98 1327.97 1296.23 1345.02 1261.95 1345.02Z"
        fill="#101014"
      ></path>
      <path
        d="M1280.15 1423.69C1278.93 1422.09 1272.96 1413.26 1275.55 1397.35C1280.45 1367.28 1311.96 1332.27 1369.19 1293.31C1370.38 1292.47 1371.71 1291.89 1373.13 1291.58C1374.54 1291.27 1376.01 1291.24 1377.43 1291.5C1378.85 1291.76 1380.21 1292.3 1381.43 1293.09C1382.64 1293.88 1383.69 1294.9 1384.5 1296.1C1385.31 1297.3 1385.88 1298.65 1386.17 1300.06C1386.46 1301.48 1386.47 1302.95 1386.18 1304.37C1385.9 1305.79 1385.34 1307.14 1384.54 1308.34C1383.73 1309.54 1382.69 1310.57 1381.48 1311.37C1327.97 1347.78 1308.14 1373.82 1300.93 1389.21C1293.99 1404.01 1297.72 1410.67 1297.89 1411.06C1297.79 1410.88 1297.68 1410.71 1297.54 1410.56L1280.15 1423.69ZM684.416 1125.52C653.463 1139.49 624.658 1151.85 603.301 1160.88C594.925 1103.42 597.838 1065.11 614.225 1059.23C630.066 1053.55 655.502 1079.09 684.416 1125.52ZM835.741 1674.38C820.137 1680.02 795.083 1655.13 766.551 1609.72L847.921 1581.81C854.713 1634.21 851.326 1668.8 835.741 1674.38Z"
        fill="#101014"
      ></path>
      <path
        d="M603.299 1171.81C600.672 1171.81 598.133 1170.86 596.147 1169.14C594.161 1167.42 592.86 1165.05 592.484 1162.45C582.506 1094.04 588.423 1056.84 610.564 1048.94C632.031 1041.24 659.215 1064.4 693.682 1119.75C694.505 1121.07 695.035 1122.56 695.238 1124.1C695.441 1125.64 695.311 1127.21 694.857 1128.7C694.404 1130.19 693.637 1131.57 692.609 1132.74C691.58 1133.91 690.313 1134.84 688.893 1135.48C662.984 1147.15 635.618 1159.15 607.541 1170.93C606.201 1171.51 604.758 1171.8 603.299 1171.81ZM619.049 1069.33C618.677 1069.33 618.307 1069.39 617.956 1069.52C614.078 1070.9 605.484 1087.98 612.239 1145.21C631.43 1137.01 650.22 1128.82 668.373 1120.73C640.57 1078.47 624.456 1069.33 619.049 1069.33ZM831.132 1686.1C811.304 1686.1 787.051 1662.87 757.336 1615.53C756.463 1614.13 755.916 1612.56 755.736 1610.92C755.556 1609.29 755.749 1607.63 756.298 1606.08C756.848 1604.53 757.741 1603.12 758.911 1601.97C760.08 1600.81 761.497 1599.93 763.053 1599.4L844.405 1571.47C845.939 1570.94 847.57 1570.76 849.182 1570.94C850.793 1571.12 852.343 1571.66 853.721 1572.52C855.098 1573.37 856.267 1574.53 857.144 1575.89C858.021 1577.25 858.583 1578.8 858.789 1580.41C866.855 1642.95 860.61 1677.05 839.453 1684.66C836.783 1685.62 833.968 1686.11 831.132 1686.1ZM783.355 1615.53C812.342 1658.9 828.182 1665.51 832.042 1664.11C835.848 1662.72 843.786 1647.72 838.652 1596.54L783.355 1615.53Z"
        fill="#101014"
      ></path>
      <path
        d="M370.641 1169.88C368.103 1169.89 365.64 1169.01 363.676 1167.41C361.712 1165.8 360.369 1163.56 359.878 1161.07C359.387 1158.58 359.778 1155.99 360.985 1153.76C362.191 1151.53 364.138 1149.78 366.49 1148.83L610.127 1049.16C612.809 1048.06 615.818 1048.08 618.489 1049.2C621.161 1050.32 623.278 1052.46 624.374 1055.14C625.471 1057.82 625.456 1060.83 624.335 1063.5C623.213 1066.18 621.076 1068.29 618.393 1069.39L374.701 1169.06C373.411 1169.58 372.034 1169.86 370.641 1169.88ZM520.509 1810.82C517.964 1810.83 515.497 1809.95 513.533 1808.33C511.569 1806.71 510.232 1804.46 509.753 1801.96C509.274 1799.46 509.682 1796.87 510.908 1794.64C512.134 1792.41 514.1 1790.67 516.467 1789.74L831.697 1664.23C833.034 1663.7 834.464 1663.44 835.903 1663.46C837.342 1663.48 838.763 1663.79 840.084 1664.36C841.405 1664.93 842.601 1665.76 843.604 1666.79C844.606 1667.82 845.395 1669.04 845.926 1670.38C846.457 1671.72 846.719 1673.15 846.697 1674.58C846.676 1676.02 846.371 1677.44 845.8 1678.77C845.23 1680.09 844.404 1681.28 843.372 1682.29C842.339 1683.29 841.119 1684.08 839.781 1684.61L524.551 1810.04C523.265 1810.56 521.894 1810.82 520.509 1810.82Z"
        fill="#101014"
      ></path>
      <path
        d="M654.683 1757.44C652.404 1757.44 650.182 1756.73 648.329 1755.4C644.25 1752.47 547.494 1681.48 477.176 1484.87C436.191 1370.6 428.726 1278.58 429.618 1221.35C430.601 1158.86 441.362 1123.74 441.817 1122.26C442.679 1119.5 444.605 1117.19 447.171 1115.84C449.737 1114.49 452.733 1114.22 455.5 1115.08C458.267 1115.94 460.578 1117.87 461.925 1120.43C463.272 1123 463.545 1126 462.683 1128.76C462.574 1129.09 452.268 1163.1 451.449 1222.82C450.702 1277.94 458.095 1366.87 497.678 1477.5C565.465 1667.02 660.145 1736.94 661.001 1737.63C662.881 1738.97 664.285 1740.88 665.013 1743.07C665.742 1745.26 665.756 1747.63 665.053 1749.83C664.351 1752.04 662.969 1753.96 661.106 1755.32C659.242 1756.69 656.994 1757.43 654.683 1757.44ZM671.507 1668.49C663.584 1668.49 655.84 1666.14 649.252 1661.74C642.665 1657.34 637.531 1651.09 634.499 1643.77C631.467 1636.45 630.674 1628.39 632.219 1620.62C633.765 1612.85 637.58 1605.71 643.182 1600.11C648.784 1594.51 655.922 1590.7 663.692 1589.15C671.462 1587.6 679.516 1588.4 686.836 1591.43C694.155 1594.46 700.411 1599.6 704.813 1606.18C709.214 1612.77 711.564 1620.51 711.564 1628.44C711.564 1639.06 707.343 1649.25 699.831 1656.76C692.319 1664.27 682.13 1668.49 671.507 1668.49ZM671.507 1610.32C667.905 1610.32 664.385 1611.39 661.391 1613.39C658.397 1615.39 656.063 1618.23 654.685 1621.56C653.307 1624.89 652.946 1628.55 653.649 1632.08C654.351 1635.61 656.086 1638.86 658.632 1641.4C661.178 1643.95 664.423 1645.68 667.955 1646.39C671.486 1647.09 675.147 1646.73 678.474 1645.35C681.801 1643.97 684.645 1641.64 686.646 1638.64C688.646 1635.65 689.714 1632.13 689.714 1628.53C689.714 1623.7 687.796 1619.07 684.381 1615.65C680.967 1612.24 676.336 1610.32 671.507 1610.32ZM293.952 1202.91C291.436 1202.91 288.994 1202.05 287.04 1200.46C285.086 1198.88 283.74 1196.67 283.228 1194.2C282.717 1191.74 283.071 1189.17 284.232 1186.94C285.393 1184.71 287.29 1182.94 289.601 1181.95L318.114 1169.55C319.434 1168.94 320.862 1168.61 322.314 1168.56C323.766 1168.51 325.213 1168.75 326.57 1169.27C327.927 1169.79 329.167 1170.57 330.218 1171.58C331.268 1172.58 332.108 1173.78 332.688 1175.12C333.268 1176.45 333.577 1177.88 333.596 1179.33C333.615 1180.79 333.344 1182.23 332.799 1183.58C332.254 1184.92 331.446 1186.15 330.422 1187.18C329.398 1188.21 328.179 1189.02 326.835 1189.58L298.304 1201.99C296.929 1202.59 295.449 1202.9 293.952 1202.91ZM1178.01 758.474C1176.93 758.476 1175.87 758.316 1174.84 758C1172.07 757.159 1169.75 755.252 1168.38 752.698C1167.01 750.144 1166.72 747.153 1167.56 744.381C1167.96 743.088 1206.63 614.706 1190.75 561.466C1190.31 560.083 1190.15 558.625 1190.28 557.178C1190.41 555.731 1190.83 554.325 1191.51 553.041C1192.19 551.758 1193.11 550.622 1194.24 549.702C1195.36 548.781 1196.66 548.094 1198.05 547.679C1199.44 547.265 1200.9 547.133 1202.35 547.29C1203.79 547.448 1205.19 547.891 1206.46 548.595C1207.73 549.299 1208.85 550.249 1209.74 551.39C1210.64 552.531 1211.31 553.84 1211.69 555.239C1229.43 614.742 1190.15 745.2 1188.46 750.735C1187.78 752.975 1186.39 754.936 1184.51 756.329C1182.63 757.722 1180.35 758.474 1178.01 758.474ZM1230.26 724.717C1228.39 724.714 1226.54 724.228 1224.91 723.305C1223.27 722.382 1221.9 721.052 1220.93 719.445C1219.96 717.839 1219.42 716.008 1219.36 714.132C1219.3 712.255 1219.73 710.394 1220.6 708.73C1222.07 705.908 1257.76 638.594 1343.32 577.253C1344.48 576.416 1345.8 575.817 1347.2 575.489C1348.59 575.162 1350.04 575.114 1351.46 575.346C1352.87 575.579 1354.23 576.088 1355.45 576.844C1356.67 577.601 1357.73 578.59 1358.56 579.756C1359.4 580.922 1360 582.241 1360.33 583.638C1360.65 585.035 1360.7 586.483 1360.47 587.899C1360.24 589.315 1359.73 590.671 1358.97 591.891C1358.22 593.11 1357.23 594.168 1356.06 595.005C1274.69 653.27 1240.31 718.18 1239.99 718.817C1239.06 720.599 1237.67 722.091 1235.95 723.132C1234.24 724.172 1232.27 724.721 1230.26 724.717ZM1351.09 297.073H1350.24C1348.28 296.913 1346.4 296.229 1344.8 295.092C1343.19 293.954 1341.93 292.405 1341.13 290.609L1321.21 245.745C1320.63 244.43 1320.31 243.013 1320.28 241.575C1320.24 240.138 1320.49 238.707 1321.01 237.365C1321.53 236.024 1322.31 234.797 1323.3 233.756C1324.29 232.715 1325.48 231.879 1326.79 231.297C1328.11 230.715 1329.53 230.398 1330.96 230.363C1332.4 230.328 1333.83 230.577 1335.17 231.095C1336.51 231.614 1337.74 232.391 1338.78 233.383C1339.82 234.375 1340.66 235.563 1341.24 236.878L1352.95 263.243L1397.14 194.909C1398.72 192.506 1401.19 190.826 1404.01 190.234C1406.83 189.641 1409.77 190.186 1412.18 191.748C1414.6 193.31 1416.31 195.763 1416.93 198.575C1417.55 201.386 1417.03 204.329 1415.49 206.762L1360.32 292.065C1359.33 293.608 1357.96 294.876 1356.35 295.751C1354.73 296.626 1352.93 297.081 1351.09 297.073ZM663.149 745.51C660.689 745.506 658.303 744.672 656.376 743.143L627.135 720.001C625.967 719.126 624.987 718.027 624.251 716.767C623.515 715.508 623.039 714.114 622.851 712.667C622.662 711.221 622.766 709.751 623.154 708.345C623.543 706.94 624.21 705.626 625.114 704.481C626.019 703.337 627.144 702.386 628.422 701.683C629.7 700.981 631.106 700.541 632.557 700.391C634.008 700.24 635.474 700.382 636.87 700.807C638.265 701.233 639.561 701.933 640.681 702.867L654.209 713.574L664.46 607.969C664.599 606.54 665.018 605.153 665.693 603.886C666.367 602.619 667.285 601.498 668.393 600.586C669.502 599.673 670.779 598.988 672.152 598.57C673.525 598.151 674.967 598.007 676.395 598.146C677.824 598.285 679.211 598.703 680.478 599.378C681.745 600.053 682.867 600.971 683.779 602.079C684.691 603.187 685.376 604.464 685.794 605.837C686.213 607.21 686.357 608.652 686.218 610.081L674.019 735.605C673.756 738.315 672.49 740.83 670.469 742.656C668.448 744.481 665.818 745.486 663.095 745.473L663.149 745.51ZM1635.84 759.166C1634.65 759.168 1633.46 758.971 1632.33 758.583C1630.17 757.849 1628.29 756.457 1626.96 754.602C1625.63 752.747 1624.92 750.523 1624.92 748.241V676.357C1624.92 673.46 1626.07 670.681 1628.12 668.632C1630.17 666.583 1632.94 665.432 1635.84 665.432C1638.74 665.432 1641.52 666.583 1643.57 668.632C1645.61 670.681 1646.77 673.46 1646.77 676.357V715.959L1697.98 649.173C1698.85 648.008 1699.93 647.027 1701.18 646.286C1702.42 645.545 1703.8 645.059 1705.24 644.857C1706.67 644.654 1708.13 644.739 1709.53 645.107C1710.94 645.474 1712.25 646.117 1713.4 646.997C1714.55 647.878 1715.52 648.978 1716.24 650.235C1716.96 651.491 1717.42 652.879 1717.6 654.317C1717.78 655.754 1717.68 657.214 1717.29 658.609C1716.9 660.005 1716.23 661.309 1715.34 662.446L1644.6 754.887C1643.57 756.229 1642.24 757.315 1640.72 758.057C1639.2 758.8 1637.53 759.179 1635.84 759.166Z"
        fill="#101014"
      ></path>
    </svg>
  );
}