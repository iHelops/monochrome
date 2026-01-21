/**
 * Defines the base color scheme.
 *
 * @return {*} Copy of the base color scheme.
 */
const base = () => {
  return {
    colors: {
      'activityBar.activeBorder': 0,
      'activityBar.background': 0,
      'activityBar.border': 0.0392156862745098,
      'activityBar.foreground': 0.7490196078431373,
      'activityBar.inactiveForeground': 0.23921568627450981,
      'activityBarBadge.background': 0.3764705882352941,
      'badge.background': 0.10196078431372549,
      'badge.foreground': 0.7490196078431373,
      'button.background': 0.09411764705882353,
      'button.hoverBackground': 0.12156862745098039,
      'checkbox.border': 0.0392156862745098,
      'dart.closingLabels': 0.0784313725490196,
      'debugIcon.breakpointCurrentStackframeForeground': 0.5686274509803921,
      'debugIcon.breakpointDisabledForeground': 0.5686274509803921,
      'debugIcon.breakpointForeground': 0.5686274509803921,
      'debugIcon.breakpointStackframeForeground': 0.5686274509803921,
      'debugIcon.breakpointUnverifiedForeground': 0.5686274509803921,
      'debugIcon.continueForeground': 0.5686274509803921,
      'debugIcon.disconnectForeground': 0.5686274509803921,
      'debugIcon.pauseForeground': 0.5686274509803921,
      'debugIcon.restartForeground': 0.5686274509803921,
      'debugIcon.startForeground': 0.5686274509803921,
      'debugIcon.stepBackForeground': 0.5686274509803921,
      'debugIcon.stepIntoForeground': 0.5686274509803921,
      'debugIcon.stepOutForeground': 0.5686274509803921,
      'debugIcon.stepOverForeground': 0.5686274509803921,
      'debugIcon.stopForeground': 0.5686274509803921,
      'debugToolBar.background': 0,
      'dropdown.background': 0,
      'dropdown.foreground': 0.5686274509803921,
      'editor.background': 0,
      'editor.findMatchBackground': 0,
      'editor.findMatchBorder': 0.5019607843137255,
      'editor.findMatchHighlightBackground': 0,
      'editor.findMatchHighlightBorder': 0.23921568627450981,
      'editor.foldBackground': 0,
      'editor.foreground': 0.7019607843137254,
      'editor.hoverHighlightBackground': 0.058823529411764705,
      'editor.lineHighlightBackground': 0.025,
      'editor.selectionBackground': 0.058823529411764705,
      'editorBracketMatch.background': 0,
      'editorBracketMatch.border': 0.23921568627450981,
      'editorCursor.foreground': 0.7019607843137254,
      'editorError.foreground': 0.3607843137254902,
      'editorGroup.border': 0.0392156862745098,
      'editorGroupHeader.tabsBackground': 0,
      'editorGroupHeader.tabsBorder': 0.0392156862745098,
      'editorIndentGuide.activeBackground': 0.24,
      'editorIndentGuide.background': 0.08,
      'editorInfo.foreground': 0.3607843137254902,
      'editorLightBulb.foreground': 0.5686274509803921,
      'editorLineNumber.activeForeground': 0.25882352941176473,
      'editorLineNumber.foreground': 0.1921568627,
      'editorLink.activeForeground': 0.7490196078431373,
      'editorOverviewRuler.border': 0.0392156862745098,
      'editorRuler.foreground': 0.08,
      'editorSuggestWidget.foreground': 0.3764705882352941,
      'editorSuggestWidget.highlightForeground': 0.7490196078431373,
      'editorWarning.foreground': 0.3607843137254902,
      'editorWhitespace.foreground': 0.10196078431372549,
      'editorWidget.background': 0,
      'editorHoverWidget.statusBarBackground': 0,
      focusBorder: 0.0745098039,
      'gitDecoration.ignoredResourceForeground': 0.154,
      'gitDecoration.addedResourceForeground': 0.752,
      'gitDecoration.modifiedResourceForeground': 0.752,
      'gitDecoration.deletedResourceForeground': 0.3764705882352941,
      'gitDecoration.untrackedResourceForeground': 0.752,
      'gitDecoration.conflictingResourceForeground': 0.752,
      'gitDecoration.submoduleResourceForeground': 0.3764705882352941,
      'icon.foreground': 0.2196078431372549,
      'input.background': 0,
      'input.border': 0.0745098039,
      'input.foreground': 0.5686274509803921,
      'inputOption.activeBorder': 1,
      'list.activeSelectionBackground': 0.0392156862745098,
      'list.activeSelectionForeground': 0.7490196078431373,
      'list.filterMatchBackground': 0.10196078431372549,
      'list.filterMatchBorder': 0,
      'list.focusBackground': 0.0392156862745098,
      'list.focusOutline': 0.0392156862745098,
      'list.highlightForeground': 0.6,
      'list.hoverBackground': 0,
      'list.inactiveSelectionBackground': 0,
      'list.inactiveSelectionForeground': 0.7490196078431373,
      'listFilterWidget.background': 0,
      'listFilterWidget.outline': 0.23921568627450981,
      'menu.background': 0.0395098039,
      'menu.foreground': 0.5686274509803921,
      'menu.selectionBackground': 0.0980392157,
      'menu.selectionForeground': 0.7490196078431373,
      'menubar.selectionBackground': 0.0392156862745098,
      'menu.separatorBackground': 0.0980392157,
      'quickInput.background': 0.0395098039,
      'quickInput.foreground': 0.5686274509803921,
      'quickInputList.focusBackground': 0.0980392157,
      'pickerGroup.border': 0.0980392157,
      'panel.border': 0.0392156862745098,
      'panelTitle.activeBorder': 0,
      'panelTitle.activeForeground': 0.7490196078431373,
      'panelTitle.inactiveForeground': 0.23921568627450981,
      'peekView.border': 0.2196078431372549,
      'peekViewEditor.background': 0,
      'peekViewEditor.matchHighlightBackground': 0,
      'peekViewEditor.matchHighlightBorder': 0.23921568627450981,
      'peekViewEditorGutter.background': 0,
      'peekViewResult.background': 0.023529411764705882,
      'peekViewResult.fileForeground': 0.6,
      'peekViewResult.lineForeground': 0.23921568627450981,
      'peekViewResult.matchHighlightBackground': 0.058823529411764705,
      'peekViewResult.selectionBackground': 0,
      'peekViewResult.selectionForeground': 0.7490196078431373,
      'pickerGroup.foreground': 0.615686274509804,
      'sash.hoverBorder': 0.058823529411764705,
      'scrollbar.shadow': 0,
      'scrollbarSlider.activeBackground': 0.058823529411764705,
      'scrollbarSlider.background': 0.058823529411764705,
      'scrollbarSlider.hoverBackground': 0.058823529411764705,
      'settings.checkboxBorder': 0.0392156862745098,
      'settings.dropdownBorder': 0.0392156862745098,
      'settings.modifiedItemIndicator': 0.2196078431372549,
      'settings.textInputBorder': 0.0392156862745098,
      'sideBar.background': 0,
      'sideBar.border': 0.0392156862745098,
      'sideBar.foreground': 0.3764705882352941,
      'sideBarSectionHeader.background': 0,
      'sideBarSectionHeader.border': 0.0392156862745098,
      'statusBar.background': 0,
      'statusBar.border': 0.0392156862745098,
      'statusBar.debuggingBackground': 0,
      'statusBar.debuggingBorder': 0.0392156862745098,
      'statusBar.debuggingForeground': 0.5686274509803921,
      'statusBar.foreground': 0.5686274509803921,
      'statusBar.noFolderBackground': 0,
      'statusBar.noFolderBorder': 0.0392156862745098,
      'statusBar.noFolderForeground': 0.5686274509803921,
      'statusBarItem.activeBackground': 0,
      'statusBarItem.hoverBackground': 0,
      'symbolIcon.arrayForeground': 0.5686274509803921,
      'symbolIcon.booleanForeground': 0.5686274509803921,
      'symbolIcon.classForeground': 0.5686274509803921,
      'symbolIcon.colorForeground': 0.5686274509803921,
      'symbolIcon.constantForeground': 0.5686274509803921,
      'symbolIcon.constructorForeground': 0.5686274509803921,
      'symbolIcon.enumeratorForeground': 0.5686274509803921,
      'symbolIcon.enumeratorMemberForeground': 0.5686274509803921,
      'symbolIcon.eventForeground': 0.5686274509803921,
      'symbolIcon.fieldForeground': 0.5686274509803921,
      'symbolIcon.fileForeground': 0.5686274509803921,
      'symbolIcon.folderForeground': 0.5686274509803921,
      'symbolIcon.functionForeground': 0.5686274509803921,
      'symbolIcon.interfaceForeground': 0.5686274509803921,
      'symbolIcon.keyForeground': 0.5686274509803921,
      'symbolIcon.keywordForeground': 0.5686274509803921,
      'symbolIcon.methodForeground': 0.5686274509803921,
      'symbolIcon.moduleForeground': 0.5686274509803921,
      'symbolIcon.namespaceForeground': 0.5686274509803921,
      'symbolIcon.nullForeground': 0.5686274509803921,
      'symbolIcon.numberForeground': 0.5686274509803921,
      'symbolIcon.objectForeground': 0.5686274509803921,
      'symbolIcon.operatorForeground': 0.5686274509803921,
      'symbolIcon.packageForeground': 0.5686274509803921,
      'symbolIcon.propertyForeground': 0.5686274509803921,
      'symbolIcon.referenceForeground': 0.5686274509803921,
      'symbolIcon.snippetForeground': 0.5686274509803921,
      'symbolIcon.stringForeground': 0.5686274509803921,
      'symbolIcon.structForeground': 0.5686274509803921,
      'symbolIcon.textForeground': 0.5686274509803921,
      'symbolIcon.typeParameterForeground': 0.5686274509803921,
      'symbolIcon.unitForeground': 0.5686274509803921,
      'symbolIcon.variableForeground': 0.5686274509803921,
      'tab.activeForeground': 0.7490196078431373,
      'tab.border': 0,
      'tab.inactiveBackground': 0,
      'tab.inactiveForeground': 0.23921568627450981,
      'terminal.ansiBlack': '#000000',
      'terminal.ansiBlue': '#6495ED',
      'terminal.ansiBrightBlack': '#666666',
      'terminal.ansiBrightBlue': '#87CEEB',
      'terminal.ansiBrightCyan': '#B0C4DE',
      'terminal.ansiBrightGreen': '#88AA22',
      'terminal.ansiBrightMagenta': '#996600',
      'terminal.ansiBrightRed': '#CC5533',
      'terminal.ansiBrightWhite': '#FFFFFF',
      'terminal.ansiBrightYellow': '#FFA75D',
      'terminal.ansiCyan': '#B0C4DE',
      'terminal.ansiGreen': '#86AF80',
      'terminal.ansiMagenta': '#DEB887',
      'terminal.ansiRed': '#CD5C5C',
      'terminal.ansiWhite': '#F1F1F1',
      'terminal.ansiYellow': '#E8AE5B',
      'terminal.selectionBackground': 0.1137254902,
      'terminalCursor.background': 0,
      'terminalCursor.foreground': 0.7019607843137254,
      'textLink.activeForeground': 1,
      'textLink.foreground': 1,
      'textPreformat.foreground': 0.5686274509803921,
      'titleBar.activeBackground': 0,
      'titleBar.activeForeground': 0.5686274509803921,
      'titleBar.border': 0.0392156862745098,
      'titleBar.inactiveBackground': 0,
      'tree.indentGuidesStroke': 0.0784313725490196,
      'widget.shadow': '#00000040',
      'window.activeBorder': 0.0392156862745098,
    },
    tokenColors: [
      {
        scope: [
          'meta.embedded',
          'source.groovy.embedded',
          'string meta.image.inline.markdown',
          'variable.legacy.builtin.python',
        ],
        settings: {
          foreground: '#D4D4D4',
        },
      },
      {
        scope: 'emphasis',
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        scope: 'strong',
        settings: {
          fontStyle: 'bold',
        },
      },
      {
        scope: 'header',
        settings: {
          foreground: '#000080',
        },
      },
      {
        scope: 'constant.language',
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: [
          'constant.numeric',
          'variable.other.enummember',
          'keyword.operator.plus.exponent',
          'keyword.operator.minus.exponent',
        ],
        settings: {
          foreground: '#b5cea8',
        },
      },
      {
        scope: 'constant.regexp',
        settings: {
          foreground: '#646695',
        },
      },
      {
        scope: 'entity.name.tag',
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: ['entity.name.tag.css', 'entity.name.tag.less'],
        settings: {
          foreground: '#d7ba7d',
        },
      },
      {
        scope: 'entity.other.attribute-name',
        settings: {
          foreground: '#9cdcfe',
        },
      },
      {
        scope: [
          'entity.other.attribute-name.class.css',
          'source.css entity.other.attribute-name.class',
          'entity.other.attribute-name.id.css',
          'entity.other.attribute-name.parent-selector.css',
          'entity.other.attribute-name.parent.less',
          'source.css entity.other.attribute-name.pseudo-class',
          'entity.other.attribute-name.pseudo-element.css',
          'source.css.less entity.other.attribute-name.id',
          'entity.other.attribute-name.scss',
        ],
        settings: {
          foreground: '#d7ba7d',
        },
      },
      {
        scope: 'invalid',
        settings: {
          foreground: '#f44747',
        },
      },
      {
        scope: 'markup.underline',
        settings: {
          fontStyle: 'underline',
        },
      },
      {
        scope: 'markup.bold',
        settings: {
          fontStyle: 'bold',
          foreground: '#569cd6',
        },
      },
      {
        scope: 'markup.heading',
        settings: {
          fontStyle: 'bold',
          foreground: '#569cd6',
        },
      },
      {
        scope: 'markup.italic',
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        scope: 'markup.strikethrough',
        settings: {
          fontStyle: 'strikethrough',
        },
      },
      {
        scope: 'markup.inserted',
        settings: {
          foreground: '#b5cea8',
        },
      },
      {
        scope: 'markup.deleted',
        settings: {
          foreground: '#ce9178',
        },
      },
      {
        scope: 'markup.changed',
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'punctuation.definition.quote.begin.markdown',
        settings: {
          foreground: '#6A9955',
        },
      },
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: '#6796e6',
        },
      },
      {
        scope: 'markup.inline.raw',
        settings: {
          foreground: '#ce9178',
        },
      },
      {
        name: 'brackets of XML/HTML tags',
        scope: 'punctuation.definition.tag',
        settings: {
          foreground: '#808080',
        },
      },
      {
        scope: ['meta.preprocessor', 'entity.name.function.preprocessor'],
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'meta.preprocessor.string',
        settings: {
          foreground: '#ce9178',
        },
      },
      {
        scope: 'meta.preprocessor.numeric',
        settings: {
          foreground: '#b5cea8',
        },
      },
      {
        scope: 'meta.structure.dictionary.key.python',
        settings: {
          foreground: '#9cdcfe',
        },
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'storage',
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'storage.type',
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: ['storage.modifier', 'keyword.operator.noexcept'],
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: ['string', 'meta.embedded.assembly'],
        settings: {
          foreground: '#ce9178',
        },
      },
      {
        scope: 'string.tag',
        settings: {
          foreground: '#ce9178',
        },
      },
      {
        scope: 'string.value',
        settings: {
          foreground: '#ce9178',
        },
      },
      {
        scope: 'string.regexp',
        settings: {
          foreground: '#d16969',
        },
      },
      {
        name: 'String interpolation',
        scope: [
          'punctuation.definition.template-expression.begin',
          'punctuation.definition.template-expression.end',
          'punctuation.section.embedded',
        ],
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        name: 'Reset JavaScript string interpolation expression',
        scope: ['meta.template.expression'],
        settings: {
          foreground: '#d4d4d4',
        },
      },
      {
        scope: [
          'support.type.vendored.property-name',
          'support.type.property-name',
          'source.css variable',
          'source.coffee.embedded',
        ],
        settings: {
          foreground: '#9cdcfe',
        },
      },
      {
        scope: 'keyword',
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'keyword.control',
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'keyword.operator',
        settings: {
          foreground: '#d4d4d4',
        },
      },
      {
        scope: [
          'keyword.operator.new',
          'keyword.operator.expression',
          'keyword.operator.cast',
          'keyword.operator.sizeof',
          'keyword.operator.alignof',
          'keyword.operator.typeid',
          'keyword.operator.alignas',
          'keyword.operator.instanceof',
          'keyword.operator.logical.python',
          'keyword.operator.wordlike',
        ],
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'keyword.other.unit',
        settings: {
          foreground: '#b5cea8',
        },
      },
      {
        scope: [
          'punctuation.section.embedded.begin.php',
          'punctuation.section.embedded.end.php',
        ],
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'support.function.git-rebase',
        settings: {
          foreground: '#9cdcfe',
        },
      },
      {
        scope: 'constant.sha.git-rebase',
        settings: {
          foreground: '#b5cea8',
        },
      },
      {
        name: 'coloring of the Java import and package identifiers',
        scope: [
          'storage.modifier.import.java',
          'variable.language.wildcard.java',
          'storage.modifier.package.java',
        ],
        settings: {
          foreground: '#d4d4d4',
        },
      },
      {
        name: 'this.self',
        scope: 'variable.language',
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        name: 'Function declarations',
        scope: [
          'entity.name.function',
          'support.function',
          'support.constant.handlebars',
          'source.powershell variable.other.member',
          'entity.name.operator.custom-literal',
        ],
        settings: {
          foreground: '#DCDCAA',
        },
      },
      {
        name: 'Types declaration and references',
        scope: [
          'support.class',
          'support.type',
          'entity.name.type',
          'entity.name.namespace',
          'entity.other.attribute',
          'entity.name.scope-resolution',
          'entity.name.class',
          'storage.type.numeric.go',
          'storage.type.byte.go',
          'storage.type.boolean.go',
          'storage.type.string.go',
          'storage.type.uintptr.go',
          'storage.type.error.go',
          'storage.type.rune.go',
          'storage.type.cs',
          'storage.type.generic.cs',
          'storage.type.modifier.cs',
          'storage.type.variable.cs',
          'storage.type.annotation.java',
          'storage.type.generic.java',
          'storage.type.java',
          'storage.type.object.array.java',
          'storage.type.primitive.array.java',
          'storage.type.primitive.java',
          'storage.type.token.java',
          'storage.type.groovy',
          'storage.type.annotation.groovy',
          'storage.type.parameters.groovy',
          'storage.type.generic.groovy',
          'storage.type.object.array.groovy',
          'storage.type.primitive.array.groovy',
          'storage.type.primitive.groovy',
        ],
        settings: {
          foreground: '#4EC9B0',
        },
      },
      {
        name: 'Types declaration and references, TS grammar specific',
        scope: [
          'meta.type.cast.expr',
          'meta.type.new.expr',
          'support.constant.math',
          'support.constant.dom',
          'support.constant.json',
          'entity.other.inherited-class',
          'punctuation.separator.namespace.ruby',
        ],
        settings: {
          foreground: '#4EC9B0',
        },
      },
      {
        name: 'Control flow / Special keywords',
        scope: [
          'keyword.control',
          'source.cpp keyword.operator.new',
          'keyword.operator.delete',
          'keyword.other.using',
          'keyword.other.directive.using',
          'keyword.other.operator',
          'entity.name.operator',
        ],
        settings: {
          foreground: '#C586C0',
        },
      },
      {
        name: 'Variable and parameter name',
        scope: [
          'variable',
          'variable.other.property',
          'meta.definition.variable.name',
          'support.variable',
          'entity.name.variable',
          'constant.other.placeholder',
        ],
        settings: {
          foreground: '#9CDCFE',
        },
      },
      {
        name: 'Constants and enums',
        scope: ['variable.other.constant', 'variable.other.enummember'],
        settings: {
          foreground: '#4FC1FF',
        },
      },
      {
        name: 'Object keys, TS grammar specific',
        scope: ['meta.object-literal.key'],
        settings: {
          foreground: '#9CDCFE',
        },
      },
      {
        name: 'CSS property value',
        scope: [
          'support.constant.property-value',
          'support.constant.font-name',
          'support.constant.media-type',
          'support.constant.media',
          'constant.other.color.rgb-value',
          'constant.other.rgb-value',
          'support.constant.color',
        ],
        settings: {
          foreground: '#CE9178',
        },
      },
      {
        name: 'Regular expression groups',
        scope: [
          'punctuation.definition.group.regexp',
          'punctuation.definition.group.assertion.regexp',
          'punctuation.definition.character-class.regexp',
          'punctuation.character.set.begin.regexp',
          'punctuation.character.set.end.regexp',
          'keyword.operator.negation.regexp',
          'support.other.parenthesis.regexp',
        ],
        settings: {
          foreground: '#CE9178',
        },
      },
      {
        scope: [
          'constant.character.character-class.regexp',
          'constant.other.character-class.set.regexp',
          'constant.other.character-class.regexp',
          'constant.character.set.regexp',
        ],
        settings: {
          foreground: '#d16969',
        },
      },
      {
        scope: ['keyword.operator.or.regexp', 'keyword.control.anchor.regexp'],
        settings: {
          foreground: '#DCDCAA',
        },
      },
      {
        scope: 'keyword.operator.quantifier.regexp',
        settings: {
          foreground: '#d7ba7d',
        },
      },
      {
        scope: ['constant.character', 'constant.other.option'],
        settings: {
          foreground: '#569cd6',
        },
      },
      {
        scope: 'constant.character.escape',
        settings: {
          foreground: '#d7ba7d',
        },
      },
      {
        scope: 'entity.name.label',
        settings: {
          foreground: '#C8C8C8',
        },
      },
    ],
  };
};

module.exports = base;
