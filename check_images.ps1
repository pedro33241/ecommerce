$public = "C:\Users\pedro.osorio\Documents\eccomerce\ecommerce\public"
$src = "C:\Users\pedro.osorio\Documents\eccomerce\ecommerce\src"

# Encontrar todas as imagens usadas
$usedImages = @()

# Procurar em arquivos TSX/TS
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

# Procurar em arquivos CSS
Get-ChildItem -Path $src -Recurse -Include "*.css" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    
    # Procurar por url() em CSS
    [regex]::Matches($content, 'url\([''"]?([^''")]+)[''"]?\)') | ForEach-Object {
        $usedImages += $_.Groups[1].Value
    }
}

# Extrair nomes de arquivo dos caminhos
$usedImages = $usedImages | ForEach-Object {
    if ($_ -like "*/*") {
        $_.Split("/")[-1]
    } else {
        $_
    }
} | Select-Object -Unique

Write-Host "Total de imagens usadas: $($usedImages.Count)"
Write-Host "Imagens usadas:"
$usedImages | ForEach-Object { Write-Host "  - $_" }

Write-Host ""
Write-Host "=== VERIFICANDO IMAGENS NÃO UTILIZADAS ===" -ForegroundColor Yellow

# Encontrar todas as imagens no diretório public
$allFiles = Get-ChildItem -Path $public -Recurse -File | Where-Object { -not ($_.Name -match '^\.')  }

Write-Host "Total de arquivos em public: $($allFiles.Count)"
Write-Host ""

$unused = @()
$allFiles | ForEach-Object {
    if ($usedImages -notcontains $_.Name) {
        $unused += $_
    }
}

if ($unused.Count -gt 0) {
    Write-Host "Imagens NÃO utilizadas ($($unused.Count)):" -ForegroundColor Red
    $unused | ForEach-Object { 
        Write-Host "  - $($_.Name)" -ForegroundColor Red
    }
} else {
    Write-Host "Nenhuma imagem não utilizada encontrada!" -ForegroundColor Green
}
