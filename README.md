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

Recommended Loon import URL with policy mapping:

```text
https://raw.githubusercontent.com/Sukewarm/private-rule/main/Loon/O2-DE-WiFiCalling.plugin?policy=你的德国策略组名
```

Example:

```text
https://raw.githubusercontent.com/Sukewarm/private-rule/main/Loon/O2-DE-WiFiCalling.plugin?policy=Germany
```

After importing, enable the plugin, turn on Airplane Mode, manually enable Wi-Fi, and wait for `O2 WiFiCall` / `WLAN Call`.

If it does not connect, check that your Germany proxy node supports UDP, especially UDP 500 and UDP 4500.
