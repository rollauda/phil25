#!/usr/bin/env python3
"""
Script de conversion Jekyll vers Docusaurus - Version de débogage
Convertit un fichier Markdown Jekyll en format Docusaurus
"""

import os
import re
import yaml
from pathlib import Path

def debug_convert_file():
    """Version de débogage pour tester les conversions"""
    
    input_file = Path("/Users/rollandauda/Github/docusaurus/phil25/jekyll/liens.md")
    output_file = Path("/Users/rollandauda/Github/docusaurus/phil25/jekyll/liens-debug.md")
    
    print(f"📖 Lecture de: {input_file}")
    
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print(f"Taille du fichier original: {len(content)} caractères")
    
    # 1. Front matter
    print("\n🔧 Conversion du front matter...")
    if content.startswith('---'):
        parts = content.split('---', 2)
        if len(parts) >= 3:
            front_matter_str = parts[1]
            body = parts[2]
            
            jekyll_fm = yaml.safe_load(front_matter_str) or {}
            docusaurus_fm = {}
            
            # Conversions simples
            if 'title' in jekyll_fm:
                docusaurus_fm['title'] = jekyll_fm['title']
            if 'tags' in jekyll_fm:
                docusaurus_fm['tags'] = jekyll_fm['tags']
            if 'categories' in jekyll_fm:
                docusaurus_fm['tags'] = jekyll_fm['categories']
            
            new_front_matter = yaml.dump(docusaurus_fm, default_flow_style=False, allow_unicode=True)
            content = f"---\n{new_front_matter}---{body}"
            print(f"✓ Front matter converti")
    
    # 2. Supprimer {:target="_blank"}
    print("\n🔧 Suppression des attributs target...")
    content = re.sub(r'\{:target="_blank"\s*\}', '', content)
    print(f"✓ Attributs target supprimés")
    
    # 3. Convertir les admonitions Jekyll
    print("\n🔧 Conversion des admonitions...")
    
    # Nouvelle approche plus simple et sûre
    def convert_jekyll_admonition(match):
        classes = match.group(1)
        blockquote = match.group(2)
        
        # Nettoyer le blockquote
        lines = blockquote.split('\n')
        cleaned_lines = []
        for line in lines:
            if line.strip():
                cleaned_lines.append(re.sub(r'^>\s*', '', line))
        
        cleaned_content = '\n'.join(cleaned_lines).strip()
        
        # Mapper vers les admonitions Docusaurus
        if '.highlight' in classes:
            return f':::note\n{cleaned_content}\n:::'
        elif '.important' in classes:
            return f':::important\n{cleaned_content}\n:::'
        elif '.warning' in classes or '.attention' in classes:
            return f':::warning\n{cleaned_content}\n:::'
        elif '.nouveau' in classes:
            return f':::tip\n{cleaned_content}\n:::'
        else:
            return f':::note\n{cleaned_content}\n:::'
    
    # Pattern plus sûr
    pattern = r'\{:\s*(\.[\w-]+(?:\s*\.[\w-]+)*)\s*\}\s*\n((?:>\s*[^\n]*\n?)*)'
    matches = re.findall(pattern, content, re.MULTILINE)
    print(f"Trouvé {len(matches)} admonitions Jekyll")
    
    for match in matches:
        print(f"  - Classe: {match[0]}")
    
    if matches:
        content = re.sub(pattern, convert_jekyll_admonition, content, flags=re.MULTILINE)
        print(f"✓ Admonitions converties")
    
    # 4. Table des matières
    print("\n🔧 Nettoyage de la table des matières...")
    content = re.sub(r'- TOC\s*\n\{:toc\}', '', content)
    content = re.sub(r'\{:toc\}', '', content)
    print(f"✓ TOC nettoyée")
    
    # 5. Supprimer autres attributs Kramdown sauf no_toc
    print("\n🔧 Nettoyage des attributs Kramdown...")
    # Préserver {: .no_toc }
    content = re.sub(r'\{:\s*\.text-delta\s*\}', '', content)
    print(f"✓ Attributs nettoyés")
    
    print(f"\nTaille du fichier final: {len(content)} caractères")
    
    # Sauvegarder
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"💾 Fichier sauvegardé: {output_file}")
    
    return True

if __name__ == '__main__':
    debug_convert_file()
