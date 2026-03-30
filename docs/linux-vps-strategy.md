# Linux VPS Strategy & Constraints

## Environment Constraints

**Architecture:** Linux ARM64 (aarch64) - Not all packages support ARM64
**Storage:** Single persistent workspace at `/config/.openclaw/workspace/`
**No Pre-installed Tools:** Missing desktop/GUI tools, PDF generators, browsers
**Isolated:** Cannot access packages outside workspace or modify system globally

## Skill Adaptation Strategy

### ✅ What Works
- **Python scripts** with standard libraries (no external deps)
- **File operations** (read/write in workspace)
- **HTTP requests** via Python requests library
- **Basic HTML** generation
- **Markdown to text conversion**

### ❌ What Doesn't Work
- **Direct PDF generation** (missing wkhtmltopdf, weasyprint)
- **GUI browsers** (no Chrome/Firefox with display)
- **Desktop office tools** (no LibreOffice)
- **Skills requiring system packages**

### 🔧 Workaround Approaches

1. **For PDF Generation:**
   - **Option A:** Generate HTML → Provide to user to print/save as PDF
   - **Option B:** Use Python's ReportLab (pure Python, works on ARM64)
   - **Option C:** Use APIs like DocRaptor or PDFShift (external service)

2. **For Skills with Dependencies:**
   - **Option A:** Check if dependency exists (`which command`)
   - **Option B:** Install Python packages in workspace (pip install --target)
   - **Option C:** Rewrite skill to avoid external dependencies

3. **For Data Processing:**
   - Use pure Python/Pandas (if installed)
   - Convert to formats I can handle (CSV, JSON, markdown)

## Skill Development Rules for VPS

### Rules for Creating Skills
1. **No External Dependencies** - Use only Python standard library
2. **File-based Operations** - Read/write inside workspace only
3. **API-first** - Prefer web APIs over local tools
4. **Graceful Fallbacks** - Check for tools before using them
5. **Self-contained** - Include installation scripts if needed

### Installation Checklist
```bash
# Before using a skill, check:
which <command>          # Is the tool installed?
dpkg -l | grep <package> # Is Debian package installed?
pip list | grep <package> # Is Python package installed?
```

## Memory Update Protocol

**Daily Updates Required:**
- Check for new constraints/issues encountered
- Document workarounds that succeeded
- Update this strategy document
- Review skill failures and adapt

**After Each Chat:**
- If new limitation discovered → Document immediately
- If workaround successful → Add to playbook
- If skill fails → Mark as "VPS-incompatible" in memory

## Critical Files to Maintain
- `/config/.openclaw/workspace/docs/linux-vps-strategy.md` (this file)
- `/config/.openclaw/workspace/MEMORY.md` (long-term learnings)
- `/config/.openclaw/workspace/memory/YYYY-MM-DD.md` (daily logs)
- `/config/.openclaw/workspace/TOOLS.md` (custom tool configs)

## VPS-Safe Skills Directory

**Compatible Skills:**
- `aethir-enterprise/` - Custom skills with no external deps
- `aethir-research/` - Research-focused skills
- Any skill using pure Python + file I/O

**Incompatible Skills:**
- Any skill requiring `wkhtmltopdf`, `chrome`, `libreoffice`
- Skills assuming cloud storage
- Skills requiring GUI/display

## Action Items

- [ ] Install ReportLab for PDF generation (`pip install reportlab`)
- [ ] Create VPS-safe PDF generation skill
- [ ] Mark incompatible skills in memory
- [ ] Create dependency checker utility
- [ ] Document working alternatives for common tasks
