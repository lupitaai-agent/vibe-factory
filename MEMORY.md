# Long-Term Memory - OpenClaw Assistant

## System Configuration Learnings

### Elevated Permissions & Sudo Access
- **Critical:** OpenClaw's elevated (sudo) permissions are **channel-specific** and disabled by default
- **Error Pattern:** When users see "missing approval ID" errors, the real issue is usually missing `tools.elevated.allowFrom.<provider>` configuration, not the approval mechanism itself
- **Telegram Status:** Telegram channel currently does NOT have sudo access enabled in this deployment
- **Fallback Solutions:** When agent permissions fail, users can:
  1. Run commands directly on the machine
  2. Use alternative interfaces (web UI, Discord) with pre-configured sudo
  3. Configure SSH access in TOOLS.md for agent-mediated sudo

### Troubleshooting Pattern
When debugging permission issues, always:
1. Attempt to trigger the permission system to see actual error messages
2. Check `allowFrom` gate configurations for the specific provider
3. Offer multiple workaround options, not just the "proper" configuration path

## User Context

### Jochem - Aethir Enterprise
- **Primary Channel:** Telegram (ID: 542685810, Username: @Jochem_NL)
- **Technical Level:** Advanced - understands system configuration and troubleshooting
- **Communication Style:** Direct, action-oriented, appreciates root cause analysis
- **Organization:** Aethir Enterprise (likely enterprise/business user)

## Technical Notes

### OpenClaw Security Model
- Provider-specific permission gates (`tools.elevated.allowFrom.telegram`)
- Runtime checks prevent privilege escalation (runtime=direct restrictions)
- Approval system requires both mechanism configuration AND channel authorization

### Best Practices Documented
✅ Always test permission systems to get real error messages  
✅ Provide multiple solution paths (config change, direct execution, alternative interfaces)  
✅ Document both successes AND configuration failures for future debugging  
✅ Update both daily memory (specific events) and long-term memory (patterns)
