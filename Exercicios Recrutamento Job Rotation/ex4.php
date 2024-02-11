<?php

$faturamentoPorEstado = [
    'SP' => 67836.43,
    'RJ' => 36678.66,
    'MG' => 29229.88,
    'ES' => 27165.48,
    'Outros' => 19849.53
];


$valorTotal = array_sum($faturamentoPorEstado);

$percentuaisPorEstado = [];
foreach ($faturamentoPorEstado as $estado => $faturamento) {
    $percentual = ($faturamento / $valorTotal) * 100;
    $percentuaisPorEstado[$estado] = number_format($percentual, 2);
}

foreach ($percentuaisPorEstado as $estado => $percentual) {
    echo "O estado $estado teve um percentual de representação de $percentual% no valor total mensal da distribuidora.\n";
}
?>
