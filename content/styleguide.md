---
title: styleguide
rss_ignore: true
sitemap:
  disable: true
---

# Styleguide

## Typography

# VELAK H1

## VELAK H2

### VELAK H3

#### VELAK H4

##### VELAK H5

###### VELAK H6

---

### Body Text

Many non-authoritarian organizations have foundered on the dubious principle of open membership, which frequently leads to a preponderance of assholes, yahoos, spoilers, whining neurotics, & police agents. Some will call this an elitist attitude, but it is not—at least not in the C. Wright Mills sense of the word: that is, a small group which exercises power over non-insiders for its own aggrandizement.

**Some bold txt**
*Some italic text*
~~Some strikethrough text~~

> This is block quote

### Links

This [link](https://disktree.net) is a link.

* <https://velak.klingt.org/>
* <https://velak.disktree.net>
* <https://disktree.net>

### Lists

* Unordered List Item 1
* Unordered List Item 2
  * Nested Item
* Unordered List Item 3

1. Ordered List Item 1
2. Ordered List Item 2
    1. Nested Ordered Item
3. Ordered List Item 3

* [x] Write the press release
* [ ] Update the website
* [ ] Contact the media

### Definitions & Footnotes

Term
: another
: definition

Here's a sentence with a footnote. [^1]
And another footnote. [^2]

[^1]: This is the footnote.
[^2]: This is the 2nd footnote.

---

## Shortcodes

### Artist

`{{< artist "a_d_-martinz" >}}` -> {{< artist "a_d_-martinz" >}}

<!-- ### Audio -->
<!---->
<!-- `{{< audio src="/audio/test.mp3" >}}` -->
<!-- {{< audio src="/audio/test.mp3" >}} -->
<!---->
<!-- ### Email -->
<!---->
<!-- `{{< email email="office@velak.klingt.org" text="Contact Us" subject="Inquiry" >}}` -->
<!-- {{< email email="<office@velak.klingt.org>" text="Contact Us" subject="Inquiry" >}} -->
<!---->
<!-- ### Image -->
<!---->
<!-- `{{< img src="feature.png" alt="Feature Image" >}}` -->
<!-- {{< img src="feature.png" alt="Feature Image" >}} -->
<!---->
<!-- ### Video -->
<!---->
<!-- `{{< video src="/video/test.mp4" >}}` -->
<!-- {{< video src="/video/test.mp4" >}} -->

### Year

`{{< year >}}` -> {{< year >}}

<!-- ### Iframe -->
<!-- `{{< iframe src="https://example.com" >}}` -->
<!-- {{< iframe src="https://example.com" >}} -->

### Param

`{{< param "description" >}}` -> {{< param "description" >}}

---

## Layout Components

### Data List (`.data-list`)

Used for program and records listings.

{{< html >}}
<ul class="data-list">
  <li>
    <span class="date">2026-04-30</span>
    <span class="title">Example Event</span>
    <div class="artists">
      <ul class="artists">
        <li>Artist One</li>
        <li>Artist Two</li>
        <li>Artist Three</li>
      </ul>
    </div>
  </li>
  <li>
    <span class="date">2026-05-01</span>
    <span class="title">Another Performance</span>
    <div class="artists">
      <ul class="artists">
        <li>Solo Performer</li>
      </ul>
    </div>
  </li>
</ul>
{{< / html >}}

---

## Code

### Inline Code

This is `inline code`.

### Code Block

```javascript
function hello() {
  console.log("Hello, VELAK!");
}
```

### Intended code block

    Intended code block

---

## Tables

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

---

## Colors

{{< html >}}
<table class="color-palette">
  <thead>
    <tr>
      <th>Variable</th>
      <th>f_high</th>
      <th>f_med</th>
      <th>f_low</th>
      <th>f_inv</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background:var(--background)">
      <td><code>--background</code></td>
      <td style="color:var(--f_high)">VELAK</td>
      <td style="color:var(--f_med)">VELAK</td>
      <td style="color:var(--f_low)">VELAK</td>
      <td style="color:var(--f_inv)">VELAK</td>
    </tr>
    <tr style="background:var(--b_low)">
      <td><code>--b_low</code></td>
      <td style="color:var(--f_high)">VELAK</td>
      <td style="color:var(--f_med)">VELAK</td>
      <td style="color:var(--f_low)">VELAK</td>
      <td style="color:var(--f_inv)">VELAK</td>
    </tr>
    <tr style="background:var(--b_med)">
      <td><code>--b_med</code></td>
      <td style="color:var(--f_high)">VELAK</td>
      <td style="color:var(--f_med)">VELAK</td>
      <td style="color:var(--f_low)">VELAK</td>
      <td style="color:var(--f_inv)">VELAK</td>
    </tr>
    <tr style="background:var(--b_high)">
      <td><code>--b_high</code></td>
      <td style="color:var(--f_high)">VELAK</td>
      <td style="color:var(--f_med)">VELAK</td>
      <td style="color:var(--f_low)">VELAK</td>
      <td style="color:var(--f_inv)">VELAK</td>
    </tr>
    <tr style="background:var(--b_inv)">
      <td><code>--b_inv</code></td>
      <td style="color:var(--f_high)">VELAK</td>
      <td style="color:var(--f_med)">VELAK</td>
      <td style="color:var(--f_low)">VELAK</td>
      <td style="color:var(--f_inv)">VELAK</td>
    </tr>
  </tbody>
</table>
{{< / html >}}

---

## Icons

{{< icon "access_time" >}}
{{< icon "arrow_back" >}}
{{< icon "arrow_back_ios" >}}
{{< icon "arrow_downward" >}}
{{< icon "arrow_drop_down" >}}
{{< icon "arrow_drop_up" >}}
{{< icon "arrow_forward" >}}
{{< icon "arrow_forward_ios" >}}
{{< icon "arrow_left" >}}
{{< icon "arrow_right" >}}
{{< icon "arrow_right_alt" >}}
{{< icon "arrow_upward" >}}
{{< icon "bedtime" >}}
{{< icon "brightness_1" >}}
{{< icon "color_lens" >}}
{{< icon "colorize" >}}
{{< icon "compare_arrows" >}}
{{< icon "double_arrow" >}}
{{< icon "flag" >}}
{{< icon "grain" >}}
{{< icon "grid_on" >}}
{{< icon "keyboard_arrow_down" >}}
{{< icon "keyboard_arrow_left" >}}
{{< icon "keyboard_arrow_right" >}}
{{< icon "keyboard_arrow_up" >}}
{{< icon "local_cafe" >}}
{{< icon "remove_red_eye" >}}
{{< icon "subdirectory_arrow_left" >}}
{{< icon "subdirectory_arrow_right" >}}

---

## Misc

### Goat (ASCII Diagrams)

```goat
                ________                            o        *          *   .--------------.
   *---+--.    |        |     o   o      |         ^          \        /   |  .----------.  |
       |   |    '--*   -+-    |   |      v        /            \      /    | |  <------.  | |
       |    '----->       .---(---'  --->*<---   /      .+->*<--o----'     | |          | | |
   <--'  ^  ^             |   |                 |      | |  ^    \         |  '--------'  | |
          \/        *-----'   o     |<----->|   '-----'  |__|     v         '------------'  |
          /\                                                               *---------------'

```

---

<details>
<summary>Characters & Glyphs</summary>

###### Characters

A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z

##### Monospace ligatures

-- --- == === != !== =!= =:= =/= &lt;= &gt;= &amp;&amp; &amp;&amp;&amp; &amp;= ++ +++ *** ;; !! ?? ??? ?: ?. ?= &lt;: :&lt; :&gt; &gt;: &lt;:&lt; &lt;&gt; &lt;&lt;&lt; &gt;&gt;&gt; &lt;&lt; &gt;&gt; || -| *|* |- ||- |= ||= ## ### #### #{ #[ ]# #( #? #_ #*( #: #! #= ^= &lt;$&gt; &lt;$ $&gt; &lt;+&gt; &lt;+ +&gt; &lt;*&gt; &lt;* *&gt; &lt;/ &lt;/&gt; /&gt; &lt;!-- &lt;#-- --&gt; -&gt; -&gt;&gt; &lt;&lt;- &lt;- &lt;=&lt; =&lt;&lt; &lt;&lt;= &lt;== &lt;=&gt; &lt;==&gt; ==&gt; =&gt; =&gt;&gt; &gt;=&gt; &gt;&gt;= &gt;&gt;- &gt;- -&lt; -&lt;&lt; &gt;-&gt; &lt;-&lt; &lt;-| &lt;=| |=&gt; |-&gt; &lt;-&gt; &lt;~~ &lt;~ &lt;~&gt; ~~ ~~&gt; ~&gt; ~- -~ ~@ [||] |] [| |} {| [&lt; &gt;] |&gt; &lt;| ||&gt; &lt;|| |||&gt; &lt;||| &lt;|&gt; ... .. .= ..&lt; .? :: ::: := ::= :? :?&gt; // /// /* */ /= //= /== @* __

##### Diacritics

Á Ă Ắ Ặ Ằ Ẳ Ẵ Ǎ Â Ấ Ậ Ầ Ẩ Ẫ Ä Ạ À Ả Ā Ą Å Ã Æ Ǽ Ć Č Ç Ĉ Ċ Ð Ď Đ É Ĕ Ě Ê Ế Ệ Ề Ể Ễ Ë Ė Ẹ È Ẻ Ē Ę Ɛ Ẽ Ǵ Ğ Ǧ Ĝ Ģ Ġ Ħ Ĥ Í Ĭ Î Ï İ Ị Ì Ỉ Ī Į Ĩ Ĵ Ķ Ĺ Ľ Ļ Ŀ Ł Ń Ň Ņ Ŋ Ñ Ó Ŏ Ô Ố Ộ Ồ Ổ Ỗ Ö Ọ Ò Ỏ Ơ Ớ Ợ Ờ Ở Ỡ Ő Ō Ǫ Ø Ǿ Õ Œ Þ Ŕ Ř Ŗ Ś Š Ş Ŝ Ș ẞ Ə Ŧ Ť Ţ Ț Ú Ŭ Û Ü Ụ Ù Ủ Ư Ứ Ự Ừ Ử Ữ Ű Ū Ų Ů Ũ Ẃ Ŵ Ẅ Ẁ Ý Ŷ Ÿ Ỵ Ỳ Ỷ Ȳ Ỹ Ź Ž Ż á ă â ä à ā ą å ã æ ǽ ć č ç ĉ ċ ð ď đ é ĕ ě ê ë ė è ē ę ə ğ ǧ ĝ ġ ħ ĥ i ı í ĭ î ï ì ī į ĩ j ȷ ĵ ĸ l ĺ ľ ŀ ł m n ń ŉ ň ŋ ñ ó ŏ ô ö ò ơ ő ō ø ǿ õ œ þ ŕ ř s ś š ş ŝ ß ſ ŧ ť ú ŭ û ü ù ư ű ū ģ ķ ļ ņ ŗ ţ ǫ ǵ ș ț ạ ả ấ ầ ẩ ẫ ậ ắ ằ ẳ ẵ ặ ẹ ẻ ẽ ế ề ể ễ ệ ỉ ị ọ ỏ ố ồ ổ ỗ ộ ớ ờ ở ỡ ợ ụ ủ ứ ừ ử ữ ự ỵ ỷ ỹ ų ů ũ ẃ ŵ ẅ ẁ ý ŷ ÿ ỳ z ź ž ż

##### Numbers

0 1 2 3 4 5 6 7 8 9 ₀ ₁ ₂ ₃ ₄ ₅ ₆ ₇ ₈ ₉ ⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ½ ¼ ¾ ↋ ↊ ૪

##### Punctuation

. , : ; … ! ¡ ? ¿ · • * ⁅ ⁆ # ․ ‾ / \ ‿ ( ) { } [ ] ❰ ❮ ❱ ❯ ⌈ ⌊ ⌉ ⌋ ⦇ ⦈ - – — ‐ _ ‚ „ “ ” ‘ ’ « » ‹ › ‴ " ' ⟨ ⟪ ⟦ ⟩ ⟫ ⟧ · ;

##### Greek

Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω Ά Έ Ή Ί Ό Ύ Ώ Ϊ Ϋ Ϗ α β γ δ ε ζ η θ ι κ λ μ ν ξ ο π ρ ς σ τ υ φ χ ψ ω ί ϊ ΐ ύ ϋ ΰ ό ώ ά έ ή ϗ ϕ ϖ

##### Cyrillic

А Б В Г Ѓ Ґ Д Е Ё Ж З И Й К Ќ Л М Н О П Ρ С Т У Ў Ф Х Ч Ц Ш Щ Џ Ь Ъ Ы Љ Њ Ѕ Є Э І Ї Ј Ћ Ю Я Ђ Ғ Қ Ң Ү Ұ Ҷ Һ Ә Ө а б в г ѓ ґ д е ё ж з и й к ќ л μ ν ξ ο π ρ ς σ τ υ φ χ ψ ω ί ϊ ΐ ύ ϋ ΰ ό ώ ά έ ή ϗ ϕ ϖ

##### Other symbols

@ &amp; ¶ § © ® ₿ ¢ ¤ $ ₫ € ₽ £ ₮ ¥ ƒ ∙ ≔ ∁ ≃ ≅ ∐ ⎪ ⋎ ∣ ∕ ∸ ⋐ ⋱ ∈ ⋮ ∎ ≡ ∹ ∃ ≳ ⎩ ⎨ ⎧ ⎢ ⎣ ⎡ ≲ ⋯ ⊸ ⊎ ⨀ ⨆ ≇ ⊈ ≉ ∌ ∉ ≯ ≱ ≢ ≮ ≰ ⊄ ⊅ + − × ÷ = ≠ &gt; &lt; ≥ ≤ ± ≈ ¬ ~ ^ ∞ ∅ ∧ ∨ ∩ ∪ ∫ ∏ ∑ √ ∂ µ ⍳ ⍴ ℓ ℮ ∥ ⎜ ⎝ ⎛ ⎟ ⎠ ⎞ % ‰ ⁺ ™ ° ′ ″ ≺ ≼ ∷ ≟ ∶ ⊆ ⊇ ⤖ ⎭ ⎬ ⎫ ⎥ ⎦ ⎤ ⊢ ≗ ∘ ∼ ⊓ ⊔ ⊑ ⊂ ∋ ⅀ 𝔽 ℕ ℚ 𝕊 ℤ ⊃ ⊤ ≋ ∀ ⋰ ⊥ ⊛ ⊖ ⊗ ⊙ ⊕ ↑ ↗ → ↘ ↓ ↙ ← ↖ ↔ ↕ ↭ ↞ ↠ ↣ ↥ ↦ ↧ ⇉ ⇑ ⇒ ⇓ ⇔ ⇧ ⇨ ⌄ ➜ ⟵ ⟶ ⟷ ● ◯ ◔ ◕ ◌ ◎ ◦ ◆ ◇ ◊ ■ □ ▪ ▫ ◧ ◨ ◩ ◪ ◫ ▲ ▶ ▼ ◀ △ ▷ ▽ ◁ ► ◄ ▻ ◅ ▴ ▸ ▾ ◂ ▵ ▹ ▿ ◃ ⍨ ⚠ ⚡ ✓ ✕ ✗ ⋆ ✶ | ¦ † ‡ № ⌃ ⌂ ⌅ ⌥ ⌘ ⏻ ⏼ ⭘ ⏽ ⏾

##### Block symbols

┌ └ ┐ ┘ ┼ ┬ ┴ ├ ┤ ─ │ ╡ ╢ ╖ ╕ ╣ ║ ╗ ╝ ╜ ╛ ╞ ╟ ╚ ╔ ╩ ╦ ╠ ═ ╬ ╧ ╨ ╤ ╥ ╙ ╘ ╒ ╓ ╫ ╪ ━ ┃ ┄ ┅ ┆ ┇ ┈ ┉ ┊ ┋ ┍ ┎ ┏ ┑ ┒ ┓ ┕ ┖ ┗ ┙ ┚ ┛ ┝ ┞ ┟ ┠ ┡ ┢ ┣ ┥ ┦ ┧ ┨ ┩ ┪ ┫ ┭ ┮ ┯ ┰ ┱ ┲ ┳ ┵ ┶ ┷ ┸ ┹ ┺ ┻ ┽ ┾ ┿ ╀ ╁ ╂ ╃ ╄ ╅ ╆ ╇ ╈ ╉ ╊ ╋ ╌ ╍ ╎ ╏ ╭ ╮ ╯ ╰ ╱ ╲ ╳ ╴ ╵ ╶ ╷ ╸ ╹ ╺ ╻ ╼ ╽ ╾ ╿

##### Control codes

␆ ␈ ␇ ␘ ␍ ␐ ␡ ␔ ␑ ␓ ␒ ␙ ␃ ␄ ␗ ␅ ␛ ␜ ␌ ␝ ␉ ␊ ␕ ␤ ␀ ␞ ␏ ␎ ␠ ␁ 2 ␚ ␖ ␟ ␋

##### Powerline

      

</details>

---

```
    _/\/\____/\/\__/\/\/\/\/\/\__/\/\____________/\/\______/\/\____/\/\_
   _/\/\____/\/\__/\____________/\/\__________/\/\/\/\____/\/\__/\/\___
  _/\/\____/\/\__/\/\/\/\/\____/\/\________/\/\____/\/\__/\/\/\/\_____
 ___/\/\/\/\____/\/\__________/\/\________/\/\/\/\/\/\__/\/\__/\/\___
_____/\/\______/\/\/\/\/\/\__/\/\/\/\/\__/\/\____/\/\__/\/\____/\/\_
```
