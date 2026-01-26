$public = "C:\Users\pedro.osorio\Documents\eccomerce\ecommerce\public"
$src = "C:\Users\pedro.osorio\Documents\eccomerce\ecommerce\src"

# Encontrar todas as imagens usadas
$usedImages = @()

Get-ChildItem -Path $src -Recurse -Include "*.tsx", "*.ts" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    
    # Procurar por srcImage: "/path/image.jpg"
    [regex]::Matches($content, 'srcImage:\s*"([^"]+)"') | ForEach-Object {
        $usedImages += $_.Groups[1].Value
    }
    
    # Procurar por src="/path/image.svg"
    [regex]::Matches($content, 'src="([^"]+)"') | ForEach-Object {
        $usedImages += $_.Groups[1].Value
    }
}

# Remover paths e manter apenas nomes de arquivo
$usedImages = $usedImages | ForEach-Object {
    if ($_ -like "*/*") {
        $_.Split("/")[-1]
    } else {
        $_
    }
} | Select-Object -Unique

# Encontrar todas as imagens no diretório public
$allFiles = Get-ChildItem -Path $public -Recurse -File | Where-Object { -not ($_.Name -match '^\.')  }

Write-Host "Total de arquivos: $($allFiles.Count)"
Write-Host "Arquivos usados: $($usedImages.Count)"
Write-Host ""
Write-Host "=== IMAGENS NÃO UTILIZADAS ===" -ForegroundColor Yellow

$unused = @()
$allFiles | ForEach-Object {
    if ($usedImages -notcontains $_.Name) {
        $unused += $_
        Write-Host $_.FullName -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Total de arquivos não utilizados: $($unused.Count)" -ForegroundColor Yellow
