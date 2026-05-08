# private-rule

Personal proxy rule plugins and rule sets.

## Loon: O2 Germany Wi-Fi Calling

Plugin file:

```text
Loon/O2-DE-WiFiCalling.plugin
```

Raw import URL:

```text
https://raw.githubusercontent.com/Sukewarm/private-rule/main/Loon/O2-DE-WiFiCalling.plugin
```

### Important: `PROXY` is selectable in Loon

In a Loon plugin, the `PROXY` written inside `[Rule]` is **not** a fixed policy group name.

It is a placeholder. When you add or edit the plugin in Loon, you choose which policy group `PROXY` maps to.

Loon plugin rule policies are limited to `DIRECT`, `REJECT`, and `PROXY`; `PROXY` means the policy manually selected in the plugin settings.

### Recommended import URL

Replace `Germany` with your real Germany node or Germany policy group name in Loon:

```text
https://raw.githubusercontent.com/Sukewarm/private-rule/main/Loon/O2-DE-WiFiCalling.plugin?policy=Germany
```

If you add the plugin in Loon's config file, use this format:

```ini
[Plugin]
https://raw.githubusercontent.com/Sukewarm/private-rule/main/Loon/O2-DE-WiFiCalling.plugin, policy=Germany, enabled=true
```

### How to select the policy in Loon UI

1. Import the plugin URL.
2. Open the imported plugin.
3. Find the `PROXY` / policy option.
4. Select your Germany node or Germany policy group.
5. Enable the plugin.

Then turn on Airplane Mode, manually enable Wi-Fi, and wait for `O2 WiFiCall` / `WLAN Call`.

If it does not connect, check that your Germany proxy node supports UDP, especially UDP 500 and UDP 4500.
