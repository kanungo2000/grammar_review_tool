// Generated from /home/melihovv/Projects/edu/grammar_review_tool/resources/assets/js/Parser/Bison/BisonLexer.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002$\u0224\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001",
    "\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004\u0004\u0005",
    "\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b\t\b\u0004\t",
    "\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004\r\t\r\u0004\u000e",
    "\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004\u0011\t\u0011",
    "\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t\u0014\u0004\u0015",
    "\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004\u0018\t\u0018",
    "\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t\u001b\u0004\u001c",
    "\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004\u001f\t\u001f",
    "\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004%\t%\u0004",
    "&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004,\t,\u0004",
    "-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u00043\t3\u0004",
    "4\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0004:\t:\u0004",
    ";\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004?\t?\u0004@\t@\u0004A\tA\u0004",
    "B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004F\tF\u0004G\tG\u0004H\tH\u0004",
    "I\tI\u0004J\tJ\u0004K\tK\u0004L\tL\u0004M\tM\u0004N\tN\u0004O\tO\u0004",
    "P\tP\u0004Q\tQ\u0004R\tR\u0004S\tS\u0004T\tT\u0004U\tU\u0004V\tV\u0003",
    "\u0002\u0006\u0002\u00b5\n\u0002\r\u0002\u000e\u0002\u00b6\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0005\t\u00d0\n\t\u0003\n\u0003\n\u0003\u000b",
    "\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00ec\n\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0006\u0013\u00f7\n\u0013\r\u0013\u000e\u0013",
    "\u00f8\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003",
    "!\u0006!\u0132\n!\r!\u000e!\u0133\u0003\"\u0006\"\u0137\n\"\r\"\u000e",
    "\"\u0138\u0003#\u0003#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003",
    "$\u0003%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0003&\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0003(\u0003)\u0003",
    ")\u0003)\u0003*\u0006*\u0159\n*\r*\u000e*\u015a\u0003+\u0003+\u0003",
    "+\u0003+\u0003+\u0003,\u0003,\u0003,\u0003,\u0003-\u0003-\u0003-\u0003",
    "-\u0003.\u0003.\u0003.\u0003.\u0003.\u0003/\u0003/\u0003/\u0003/\u0003",
    "0\u00030\u00030\u00030\u00031\u00031\u00031\u00031\u00032\u00032\u0003",
    "2\u00032\u00033\u00033\u00033\u00034\u00064\u0183\n4\r4\u000e4\u0184",
    "\u00035\u00035\u00035\u00035\u00035\u00055\u018c\n5\u00035\u00035\u0003",
    "5\u00036\u00036\u00036\u00036\u00036\u00056\u0196\n6\u00036\u00036\u0003",
    "7\u00037\u00037\u00037\u00038\u00068\u019f\n8\r8\u000e8\u01a0\u0003",
    "9\u00039\u0003:\u0006:\u01a6\n:\r:\u000e:\u01a7\u0003;\u0003;\u0003",
    ";\u0006;\u01ad\n;\r;\u000e;\u01ae\u0003<\u0003<\u0003=\u0003=\u0003",
    ">\u0003>\u0003>\u0005>\u01b8\n>\u0003?\u0003?\u0005?\u01bc\n?\u0003",
    "@\u0003@\u0003A\u0003A\u0003B\u0003B\u0003C\u0003C\u0003D\u0003D\u0003",
    "D\u0003E\u0003E\u0003F\u0003F\u0003G\u0003G\u0005G\u01cf\nG\u0003H\u0003",
    "H\u0003I\u0003I\u0003J\u0003J\u0003J\u0003J\u0007J\u01d9\nJ\fJ\u000e",
    "J\u01dc\u000bJ\u0003J\u0003J\u0003J\u0003K\u0003K\u0007K\u01e3\nK\f",
    "K\u000eK\u01e6\u000bK\u0003L\u0003L\u0003M\u0003M\u0003M\u0003M\u0003",
    "M\u0003M\u0007M\u01f0\nM\fM\u000eM\u01f3\u000bM\u0003M\u0003M\u0003",
    "N\u0003N\u0003O\u0003O\u0003O\u0003O\u0003O\u0003O\u0007O\u01ff\nO\f",
    "O\u000eO\u0202\u000bO\u0003O\u0003O\u0003P\u0003P\u0003P\u0003P\u0007",
    "P\u020a\nP\fP\u000eP\u020d\u000bP\u0003P\u0003P\u0003Q\u0003Q\u0003",
    "R\u0003R\u0003R\u0003S\u0003S\u0003S\u0003T\u0003T\u0003U\u0003U\u0003",
    "U\u0007U\u021e\nU\fU\u000eU\u0221\u000bU\u0003V\u0003V\u0003\u01da\u0002",
    "W\t\u0003\u000b\u0004\r\u0005\u000f\u0006\u0011\u0007\u0013\b\u0015",
    "\t\u0017\n\u0019\u000b\u001b\f\u001d\r\u001f\u000e!\u000f#\u0010%\u0011",
    "\'\u0012)\u0013+\u0014-\u0015/\u00161\u00173\u00185\u00197\u00029\u0002",
    ";\u0002=\u0002?\u0002A\u0002C\u0002E\u001aG\u001bI\u001cK\u0002M\u0002",
    "O\u0002Q\u0002S\u0002U\u0002W\u001dY\u001e[\u0002]\u0002_\u0002a\u0002",
    "c\u0002e\u0002g#i\u0002k\u001fm o\u0002q!s$u\"w\u0002y\u0002{\u0002",
    "}\u0002\u007f\u0002\u0081\u0002\u0083\u0002\u0085\u0002\u0087\u0002",
    "\u0089\u0002\u008b\u0002\u008d\u0002\u008f\u0002\u0091\u0002\u0093\u0002",
    "\u0095\u0002\u0097\u0002\u0099\u0002\u009b\u0002\u009d\u0002\u009f\u0002",
    "\u00a1\u0002\u00a3\u0002\u00a5\u0002\u00a7\u0002\u00a9\u0002\u00ab\u0002",
    "\u00ad\u0002\u00af\u0002\u00b1\u0002\t\u0002\u0003\u0004\u0005\u0006",
    "\u0007\b\u0013\u0005\u000211<<]]\b\u0002$$\'\'))11}}\u007f\u007f\u0007",
    "\u0002$$))11}}\u007f\u007f\t\u0002$$\'\'))11AA}}\u007f\u007f\u0005\u0002",
    "((>>@@\u0003\u00022;\u0003\u000222\u0004\u0002ZZzz\u0005\u00022;CHc",
    "h\u0003\u0002C\\\u0003\u0002c|\u0004\u0002\u000b\u000b\"\"\u0003\u0002",
    "\f\u000f\u0004\u0002\f\f\u000f\u000f\u0005\u0002\f\f\u000f\u000f))\u0005",
    "\u0002\f\f\u000f\u000f$$\u0004\u0002//2;\u021b\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002",
    "\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002",
    "\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002",
    "\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002",
    "\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0003",
    "+\u0003\u0002\u0002\u0002\u0003-\u0003\u0002\u0002\u0002\u0003/\u0003",
    "\u0002\u0002\u0002\u00031\u0003\u0002\u0002\u0002\u00033\u0003\u0002",
    "\u0002\u0002\u00035\u0003\u0002\u0002\u0002\u00047\u0003\u0002\u0002",
    "\u0002\u00049\u0003\u0002\u0002\u0002\u0004;\u0003\u0002\u0002\u0002",
    "\u0004=\u0003\u0002\u0002\u0002\u0004?\u0003\u0002\u0002\u0002\u0004",
    "A\u0003\u0002\u0002\u0002\u0004C\u0003\u0002\u0002\u0002\u0004E\u0003",
    "\u0002\u0002\u0002\u0004G\u0003\u0002\u0002\u0002\u0005I\u0003\u0002",
    "\u0002\u0002\u0006K\u0003\u0002\u0002\u0002\u0006M\u0003\u0002\u0002",
    "\u0002\u0006O\u0003\u0002\u0002\u0002\u0006Q\u0003\u0002\u0002\u0002",
    "\u0006S\u0003\u0002\u0002\u0002\u0006U\u0003\u0002\u0002\u0002\u0006",
    "W\u0003\u0002\u0002\u0002\u0006Y\u0003\u0002\u0002\u0002\u0007[\u0003",
    "\u0002\u0002\u0002\u0007]\u0003\u0002\u0002\u0002\u0007_\u0003\u0002",
    "\u0002\u0002\u0007a\u0003\u0002\u0002\u0002\u0007c\u0003\u0002\u0002",
    "\u0002\u0007e\u0003\u0002\u0002\u0002\u0007g\u0003\u0002\u0002\u0002",
    "\u0007i\u0003\u0002\u0002\u0002\u0007k\u0003\u0002\u0002\u0002\u0007",
    "m\u0003\u0002\u0002\u0002\bo\u0003\u0002\u0002\u0002\bq\u0003\u0002",
    "\u0002\u0002\bs\u0003\u0002\u0002\u0002\bu\u0003\u0002\u0002\u0002\t",
    "\u00b4\u0003\u0002\u0002\u0002\u000b\u00ba\u0003\u0002\u0002\u0002\r",
    "\u00be\u0003\u0002\u0002\u0002\u000f\u00c2\u0003\u0002\u0002\u0002\u0011",
    "\u00c4\u0003\u0002\u0002\u0002\u0013\u00c6\u0003\u0002\u0002\u0002\u0015",
    "\u00c9\u0003\u0002\u0002\u0002\u0017\u00cf\u0003\u0002\u0002\u0002\u0019",
    "\u00d1\u0003\u0002\u0002\u0002\u001b\u00d3\u0003\u0002\u0002\u0002\u001d",
    "\u00d5\u0003\u0002\u0002\u0002\u001f\u00d9\u0003\u0002\u0002\u0002!",
    "\u00de\u0003\u0002\u0002\u0002#\u00e2\u0003\u0002\u0002\u0002%\u00eb",
    "\u0003\u0002\u0002\u0002\'\u00ef\u0003\u0002\u0002\u0002)\u00f3\u0003",
    "\u0002\u0002\u0002+\u00f6\u0003\u0002\u0002\u0002-\u00fc\u0003\u0002",
    "\u0002\u0002/\u0100\u0003\u0002\u0002\u00021\u0104\u0003\u0002\u0002",
    "\u00023\u0108\u0003\u0002\u0002\u00025\u010a\u0003\u0002\u0002\u0002",
    "7\u010f\u0003\u0002\u0002\u00029\u0114\u0003\u0002\u0002\u0002;\u0118",
    "\u0003\u0002\u0002\u0002=\u011c\u0003\u0002\u0002\u0002?\u0121\u0003",
    "\u0002\u0002\u0002A\u0125\u0003\u0002\u0002\u0002C\u0129\u0003\u0002",
    "\u0002\u0002E\u012d\u0003\u0002\u0002\u0002G\u0131\u0003\u0002\u0002",
    "\u0002I\u0136\u0003\u0002\u0002\u0002K\u013a\u0003\u0002\u0002\u0002",
    "M\u013f\u0003\u0002\u0002\u0002O\u0143\u0003\u0002\u0002\u0002Q\u0147",
    "\u0003\u0002\u0002\u0002S\u014c\u0003\u0002\u0002\u0002U\u0150\u0003",
    "\u0002\u0002\u0002W\u0154\u0003\u0002\u0002\u0002Y\u0158\u0003\u0002",
    "\u0002\u0002[\u015c\u0003\u0002\u0002\u0002]\u0161\u0003\u0002\u0002",
    "\u0002_\u0165\u0003\u0002\u0002\u0002a\u0169\u0003\u0002\u0002\u0002",
    "c\u016e\u0003\u0002\u0002\u0002e\u0172\u0003\u0002\u0002\u0002g\u0176",
    "\u0003\u0002\u0002\u0002i\u017a\u0003\u0002\u0002\u0002k\u017e\u0003",
    "\u0002\u0002\u0002m\u0182\u0003\u0002\u0002\u0002o\u018b\u0003\u0002",
    "\u0002\u0002q\u0195\u0003\u0002\u0002\u0002s\u0199\u0003\u0002\u0002",
    "\u0002u\u019e\u0003\u0002\u0002\u0002w\u01a2\u0003\u0002\u0002\u0002",
    "y\u01a5\u0003\u0002\u0002\u0002{\u01a9\u0003\u0002\u0002\u0002}\u01b0",
    "\u0003\u0002\u0002\u0002\u007f\u01b2\u0003\u0002\u0002\u0002\u0081\u01b7",
    "\u0003\u0002\u0002\u0002\u0083\u01bb\u0003\u0002\u0002\u0002\u0085\u01bd",
    "\u0003\u0002\u0002\u0002\u0087\u01bf\u0003\u0002\u0002\u0002\u0089\u01c1",
    "\u0003\u0002\u0002\u0002\u008b\u01c3\u0003\u0002\u0002\u0002\u008d\u01c5",
    "\u0003\u0002\u0002\u0002\u008f\u01c8\u0003\u0002\u0002\u0002\u0091\u01ca",
    "\u0003\u0002\u0002\u0002\u0093\u01ce\u0003\u0002\u0002\u0002\u0095\u01d0",
    "\u0003\u0002\u0002\u0002\u0097\u01d2\u0003\u0002\u0002\u0002\u0099\u01d4",
    "\u0003\u0002\u0002\u0002\u009b\u01e0\u0003\u0002\u0002\u0002\u009d\u01e7",
    "\u0003\u0002\u0002\u0002\u009f\u01e9\u0003\u0002\u0002\u0002\u00a1\u01f6",
    "\u0003\u0002\u0002\u0002\u00a3\u01f8\u0003\u0002\u0002\u0002\u00a5\u0205",
    "\u0003\u0002\u0002\u0002\u00a7\u0210\u0003\u0002\u0002\u0002\u00a9\u0212",
    "\u0003\u0002\u0002\u0002\u00ab\u0215\u0003\u0002\u0002\u0002\u00ad\u0218",
    "\u0003\u0002\u0002\u0002\u00af\u021a\u0003\u0002\u0002\u0002\u00b1\u0222",
    "\u0003\u0002\u0002\u0002\u00b3\u00b5\u0005\u0093G\u0002\u00b4\u00b3",
    "\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6\u00b4",
    "\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7\u00b8",
    "\u0003\u0002\u0002\u0002\u00b8\u00b9\b\u0002\u0002\u0002\u00b9\n\u0003",
    "\u0002\u0002\u0002\u00ba\u00bb\u0005\u0099J\u0002\u00bb\u00bc\u0003",
    "\u0002\u0002\u0002\u00bc\u00bd\b\u0003\u0002\u0002\u00bd\f\u0003\u0002",
    "\u0002\u0002\u00be\u00bf\u0005\u009bK\u0002\u00bf\u00c0\u0003\u0002",
    "\u0002\u0002\u00c0\u00c1\b\u0004\u0002\u0002\u00c1\u000e\u0003\u0002",
    "\u0002\u0002\u00c2\u00c3\u0005\u008fE\u0002\u00c3\u0010\u0003\u0002",
    "\u0002\u0002\u00c4\u00c5\u0005\u0091F\u0002\u00c5\u0012\u0003\u0002",
    "\u0002\u0002\u00c6\u00c7\u0005\u00b1V\u0002\u00c7\u00c8\u0005\u00af",
    "U\u0002\u00c8\u0014\u0003\u0002\u0002\u0002\u00c9\u00ca\u0005\u00af",
    "U\u0002\u00ca\u00cb\u0003\u0002\u0002\u0002\u00cb\u00cc\b\b\u0003\u0002",
    "\u00cc\u0016\u0003\u0002\u0002\u0002\u00cd\u00d0\u0005y:\u0002\u00ce",
    "\u00d0\u0005{;\u0002\u00cf\u00cd\u0003\u0002\u0002\u0002\u00cf\u00ce",
    "\u0003\u0002\u0002\u0002\u00d0\u0018\u0003\u0002\u0002\u0002\u00d1\u00d2",
    "\u0005\u009fM\u0002\u00d2\u001a\u0003\u0002\u0002\u0002\u00d3\u00d4",
    "\u0005\u00a3O\u0002\u00d4\u001c\u0003\u0002\u0002\u0002\u00d5\u00d6",
    "\u0005\u00a9R\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00d8",
    "\b\f\u0004\u0002\u00d8\u001e\u0003\u0002\u0002\u0002\u00d9\u00da\u0007",
    "\'\u0002\u0002\u00da\u00db\u0007\'\u0002\u0002\u00db\u00dc\u0003\u0002",
    "\u0002\u0002\u00dc\u00dd\b\r\u0005\u0002\u00dd \u0003\u0002\u0002\u0002",
    "\u00de\u00df\u0007}\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002",
    "\u00e0\u00e1\b\u000e\u0006\u0002\u00e1\"\u0003\u0002\u0002\u0002\u00e2",
    "\u00e3\u0005\u00a5P\u0002\u00e3\u00e4\u0003\u0002\u0002\u0002\u00e4",
    "\u00e5\b\u000f\u0007\u0002\u00e5$\u0003\u0002\u0002\u0002\u00e6\u00ec",
    "\u0007>\u0002\u0002\u00e7\u00e8\u0007(\u0002\u0002\u00e8\u00e9\u0007",
    "n\u0002\u0002\u00e9\u00ea\u0007v\u0002\u0002\u00ea\u00ec\u0007=\u0002",
    "\u0002\u00eb\u00e6\u0003\u0002\u0002\u0002\u00eb\u00e7\u0003\u0002\u0002",
    "\u0002\u00ec\u00ed\u0003\u0002\u0002\u0002\u00ed\u00ee\b\u0010\b\u0002",
    "\u00ee&\u0003\u0002\u0002\u0002\u00ef\u00f0\u0005\u0089B\u0002\u00f0",
    "\u00f1\u0005\u00afU\u0002\u00f1\u00f2\u0005\u008bC\u0002\u00f2(\u0003",
    "\u0002\u0002\u0002\u00f3\u00f4\u000b\u0002\u0002\u0002\u00f4*\u0003",
    "\u0002\u0002\u0002\u00f5\u00f7\u0005\u0093G\u0002\u00f6\u00f5\u0003",
    "\u0002\u0002\u0002\u00f7\u00f8\u0003\u0002\u0002\u0002\u00f8\u00f6\u0003",
    "\u0002\u0002\u0002\u00f8\u00f9\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003",
    "\u0002\u0002\u0002\u00fa\u00fb\b\u0013\u0002\u0002\u00fb,\u0003\u0002",
    "\u0002\u0002\u00fc\u00fd\u0005\u0099J\u0002\u00fd\u00fe\u0003\u0002",
    "\u0002\u0002\u00fe\u00ff\b\u0014\u0002\u0002\u00ff.\u0003\u0002\u0002",
    "\u0002\u0100\u0101\u0005\u009bK\u0002\u0101\u0102\u0003\u0002\u0002",
    "\u0002\u0102\u0103\b\u0015\u0002\u0002\u01030\u0003\u0002\u0002\u0002",
    "\u0104\u0105\u0005\u0089B\u0002\u0105\u0106\u0005\u00afU\u0002\u0106",
    "\u0107\u0005\u008bC\u0002\u01072\u0003\u0002\u0002\u0002\u0108\u0109",
    "\u0005\u00adT\u0002\u01094\u0003\u0002\u0002\u0002\u010a\u010b\n\u0002",
    "\u0002\u0002\u010b\u010c\b\u0018\t\u0002\u010c\u010d\u0003\u0002\u0002",
    "\u0002\u010d\u010e\b\u0018\n\u0002\u010e6\u0003\u0002\u0002\u0002\u010f",
    "\u0110\u0005\u00a9R\u0002\u0110\u0111\u0003\u0002\u0002\u0002\u0111",
    "\u0112\b\u0019\u000b\u0002\u0112\u0113\b\u0019\u0004\u0002\u01138\u0003",
    "\u0002\u0002\u0002\u0114\u0115\u0005\u009fM\u0002\u0115\u0116\u0003",
    "\u0002\u0002\u0002\u0116\u0117\b\u001a\u000b\u0002\u0117:\u0003\u0002",
    "\u0002\u0002\u0118\u0119\u0005\u00a3O\u0002\u0119\u011a\u0003\u0002",
    "\u0002\u0002\u011a\u011b\b\u001b\u000b\u0002\u011b<\u0003\u0002\u0002",
    "\u0002\u011c\u011d\u00071\u0002\u0002\u011d\u011e\u000b\u0002\u0002",
    "\u0002\u011e\u011f\u0003\u0002\u0002\u0002\u011f\u0120\b\u001c\u000b",
    "\u0002\u0120>\u0003\u0002\u0002\u0002\u0121\u0122\u0005\u0099J\u0002",
    "\u0122\u0123\u0003\u0002\u0002\u0002\u0123\u0124\b\u001d\u000b\u0002",
    "\u0124@\u0003\u0002\u0002\u0002\u0125\u0126\u0005\u009bK\u0002\u0126",
    "\u0127\u0003\u0002\u0002\u0002\u0127\u0128\b\u001e\u000b\u0002\u0128",
    "B\u0003\u0002\u0002\u0002\u0129\u012a\u0005\u00b1V\u0002\u012a\u012b",
    "\u0003\u0002\u0002\u0002\u012b\u012c\b\u001f\u000b\u0002\u012cD\u0003",
    "\u0002\u0002\u0002\u012d\u012e\u0005\u00abS\u0002\u012e\u012f\b \f\u0002",
    "\u012fF\u0003\u0002\u0002\u0002\u0130\u0132\n\u0003\u0002\u0002\u0131",
    "\u0130\u0003\u0002\u0002\u0002\u0132\u0133\u0003\u0002\u0002\u0002\u0133",
    "\u0131\u0003\u0002\u0002\u0002\u0133\u0134\u0003\u0002\u0002\u0002\u0134",
    "H\u0003\u0002\u0002\u0002\u0135\u0137\u000b\u0002\u0002\u0002\u0136",
    "\u0135\u0003\u0002\u0002\u0002\u0137\u0138\u0003\u0002\u0002\u0002\u0138",
    "\u0136\u0003\u0002\u0002\u0002\u0138\u0139\u0003\u0002\u0002\u0002\u0139",
    "J\u0003\u0002\u0002\u0002\u013a\u013b\u0005\u0085@\u0002\u013b\u013c",
    "\u0003\u0002\u0002\u0002\u013c\u013d\b#\r\u0002\u013d\u013e\b#\u0006",
    "\u0002\u013eL\u0003\u0002\u0002\u0002\u013f\u0140\u0005\u009fM\u0002",
    "\u0140\u0141\u0003\u0002\u0002\u0002\u0141\u0142\b$\r\u0002\u0142N\u0003",
    "\u0002\u0002\u0002\u0143\u0144\u0005\u00a3O\u0002\u0144\u0145\u0003",
    "\u0002\u0002\u0002\u0145\u0146\b%\r\u0002\u0146P\u0003\u0002\u0002\u0002",
    "\u0147\u0148\u00071\u0002\u0002\u0148\u0149\u000b\u0002\u0002\u0002",
    "\u0149\u014a\u0003\u0002\u0002\u0002\u014a\u014b\b&\r\u0002\u014bR\u0003",
    "\u0002\u0002\u0002\u014c\u014d\u0005\u0099J\u0002\u014d\u014e\u0003",
    "\u0002\u0002\u0002\u014e\u014f\b\'\r\u0002\u014fT\u0003\u0002\u0002",
    "\u0002\u0150\u0151\u0005\u009bK\u0002\u0151\u0152\u0003\u0002\u0002",
    "\u0002\u0152\u0153\b(\r\u0002\u0153V\u0003\u0002\u0002\u0002\u0154\u0155",
    "\u0005\u0087A\u0002\u0155\u0156\b)\u000e\u0002\u0156X\u0003\u0002\u0002",
    "\u0002\u0157\u0159\n\u0004\u0002\u0002\u0158\u0157\u0003\u0002\u0002",
    "\u0002\u0159\u015a\u0003\u0002\u0002\u0002\u015a\u0158\u0003\u0002\u0002",
    "\u0002\u015a\u015b\u0003\u0002\u0002\u0002\u015bZ\u0003\u0002\u0002",
    "\u0002\u015c\u015d\u0005\u00a5P\u0002\u015d\u015e\u0003\u0002\u0002",
    "\u0002\u015e\u015f\b+\u000f\u0002\u015f\u0160\b+\u0007\u0002\u0160\\",
    "\u0003\u0002\u0002\u0002\u0161\u0162\u0005\u009fM\u0002\u0162\u0163",
    "\u0003\u0002\u0002\u0002\u0163\u0164\b,\u000f\u0002\u0164^\u0003\u0002",
    "\u0002\u0002\u0165\u0166\u0005\u00a3O\u0002\u0166\u0167\u0003\u0002",
    "\u0002\u0002\u0167\u0168\b-\u000f\u0002\u0168`\u0003\u0002\u0002\u0002",
    "\u0169\u016a\u00071\u0002\u0002\u016a\u016b\u000b\u0002\u0002\u0002",
    "\u016b\u016c\u0003\u0002\u0002\u0002\u016c\u016d\b.\u000f\u0002\u016d",
    "b\u0003\u0002\u0002\u0002\u016e\u016f\u0005\u0099J\u0002\u016f\u0170",
    "\u0003\u0002\u0002\u0002\u0170\u0171\b/\u000f\u0002\u0171d\u0003\u0002",
    "\u0002\u0002\u0172\u0173\u0005\u009bK\u0002\u0173\u0174\u0003\u0002",
    "\u0002\u0002\u0174\u0175\b0\u000f\u0002\u0175f\u0003\u0002\u0002\u0002",
    "\u0176\u0177\u0007A\u0002\u0002\u0177\u0178\u0003\u0002\u0002\u0002",
    "\u0178\u0179\b1\u000f\u0002\u0179h\u0003\u0002\u0002\u0002\u017a\u017b",
    "\u0005\u00b1V\u0002\u017b\u017c\u0003\u0002\u0002\u0002\u017c\u017d",
    "\b2\u000f\u0002\u017dj\u0003\u0002\u0002\u0002\u017e\u017f\u0005\u00a7",
    "Q\u0002\u017f\u0180\b3\u0010\u0002\u0180l\u0003\u0002\u0002\u0002\u0181",
    "\u0183\n\u0005\u0002\u0002\u0182\u0181\u0003\u0002\u0002\u0002\u0183",
    "\u0184\u0003\u0002\u0002\u0002\u0184\u0182\u0003\u0002\u0002\u0002\u0184",
    "\u0185\u0003\u0002\u0002\u0002\u0185n\u0003\u0002\u0002\u0002\u0186",
    "\u018c\u0007>\u0002\u0002\u0187\u0188\u0007(\u0002\u0002\u0188\u0189",
    "\u0007n\u0002\u0002\u0189\u018a\u0007v\u0002\u0002\u018a\u018c\u0007",
    "=\u0002\u0002\u018b\u0186\u0003\u0002\u0002\u0002\u018b\u0187\u0003",
    "\u0002\u0002\u0002\u018c\u018d\u0003\u0002\u0002\u0002\u018d\u018e\b",
    "5\u0011\u0002\u018e\u018f\b5\b\u0002\u018fp\u0003\u0002\u0002\u0002",
    "\u0190\u0196\u0007@\u0002\u0002\u0191\u0192\u0007(\u0002\u0002\u0192",
    "\u0193\u0007i\u0002\u0002\u0193\u0194\u0007v\u0002\u0002\u0194\u0196",
    "\u0007=\u0002\u0002\u0195\u0190\u0003\u0002\u0002\u0002\u0195\u0191",
    "\u0003\u0002\u0002\u0002\u0196\u0197\u0003\u0002\u0002\u0002\u0197\u0198",
    "\b6\u0012\u0002\u0198r\u0003\u0002\u0002\u0002\u0199\u019a\u0007(\u0002",
    "\u0002\u019a\u019b\u0003\u0002\u0002\u0002\u019b\u019c\b7\u0011\u0002",
    "\u019ct\u0003\u0002\u0002\u0002\u019d\u019f\n\u0006\u0002\u0002\u019e",
    "\u019d\u0003\u0002\u0002\u0002\u019f\u01a0\u0003\u0002\u0002\u0002\u01a0",
    "\u019e\u0003\u0002\u0002\u0002\u01a0\u01a1\u0003\u0002\u0002\u0002\u01a1",
    "v\u0003\u0002\u0002\u0002\u01a2\u01a3\t\u0007\u0002\u0002\u01a3x\u0003",
    "\u0002\u0002\u0002\u01a4\u01a6\u0005w9\u0002\u01a5\u01a4\u0003\u0002",
    "\u0002\u0002\u01a6\u01a7\u0003\u0002\u0002\u0002\u01a7\u01a5\u0003\u0002",
    "\u0002\u0002\u01a7\u01a8\u0003\u0002\u0002\u0002\u01a8z\u0003\u0002",
    "\u0002\u0002\u01a9\u01aa\t\b\u0002\u0002\u01aa\u01ac\t\t\u0002\u0002",
    "\u01ab\u01ad\t\n\u0002\u0002\u01ac\u01ab\u0003\u0002\u0002\u0002\u01ad",
    "\u01ae\u0003\u0002\u0002\u0002\u01ae\u01ac\u0003\u0002\u0002\u0002\u01ae",
    "\u01af\u0003\u0002\u0002\u0002\u01af|\u0003\u0002\u0002\u0002\u01b0",
    "\u01b1\t\u000b\u0002\u0002\u01b1~\u0003\u0002\u0002\u0002\u01b2\u01b3",
    "\t\f\u0002\u0002\u01b3\u0080\u0003\u0002\u0002\u0002\u01b4\u01b8\u0005",
    "}<\u0002\u01b5\u01b8\u0005\u007f=\u0002\u01b6\u01b8\u0007a\u0002\u0002",
    "\u01b7\u01b4\u0003\u0002\u0002\u0002\u01b7\u01b5\u0003\u0002\u0002\u0002",
    "\u01b7\u01b6\u0003\u0002\u0002\u0002\u01b8\u0082\u0003\u0002\u0002\u0002",
    "\u01b9\u01bc\u0005\u0081>\u0002\u01ba\u01bc\u00070\u0002\u0002\u01bb",
    "\u01b9\u0003\u0002\u0002\u0002\u01bb\u01ba\u0003\u0002\u0002\u0002\u01bc",
    "\u0084\u0003\u0002\u0002\u0002\u01bd\u01be\u0007}\u0002\u0002\u01be",
    "\u0086\u0003\u0002\u0002\u0002\u01bf\u01c0\u0007\u007f\u0002\u0002\u01c0",
    "\u0088\u0003\u0002\u0002\u0002\u01c1\u01c2\u0007]\u0002\u0002\u01c2",
    "\u008a\u0003\u0002\u0002\u0002\u01c3\u01c4\u0007_\u0002\u0002\u01c4",
    "\u008c\u0003\u0002\u0002\u0002\u01c5\u01c6\u00071\u0002\u0002\u01c6",
    "\u01c7\u00071\u0002\u0002\u01c7\u008e\u0003\u0002\u0002\u0002\u01c8",
    "\u01c9\u0007~\u0002\u0002\u01c9\u0090\u0003\u0002\u0002\u0002\u01ca",
    "\u01cb\u0007=\u0002\u0002\u01cb\u0092\u0003\u0002\u0002\u0002\u01cc",
    "\u01cf\u0005\u0095H\u0002\u01cd\u01cf\u0005\u0097I\u0002\u01ce\u01cc",
    "\u0003\u0002\u0002\u0002\u01ce\u01cd\u0003\u0002\u0002\u0002\u01cf\u0094",
    "\u0003\u0002\u0002\u0002\u01d0\u01d1\t\r\u0002\u0002\u01d1\u0096\u0003",
    "\u0002\u0002\u0002\u01d2\u01d3\t\u000e\u0002\u0002\u01d3\u0098\u0003",
    "\u0002\u0002\u0002\u01d4\u01d5\u00071\u0002\u0002\u01d5\u01d6\u0007",
    ",\u0002\u0002\u01d6\u01da\u0003\u0002\u0002\u0002\u01d7\u01d9\u000b",
    "\u0002\u0002\u0002\u01d8\u01d7\u0003\u0002\u0002\u0002\u01d9\u01dc\u0003",
    "\u0002\u0002\u0002\u01da\u01db\u0003\u0002\u0002\u0002\u01da\u01d8\u0003",
    "\u0002\u0002\u0002\u01db\u01dd\u0003\u0002\u0002\u0002\u01dc\u01da\u0003",
    "\u0002\u0002\u0002\u01dd\u01de\u0007,\u0002\u0002\u01de\u01df\u0007",
    "1\u0002\u0002\u01df\u009a\u0003\u0002\u0002\u0002\u01e0\u01e4\u0005",
    "\u008dD\u0002\u01e1\u01e3\n\u000f\u0002\u0002\u01e2\u01e1\u0003\u0002",
    "\u0002\u0002\u01e3\u01e6\u0003\u0002\u0002\u0002\u01e4\u01e2\u0003\u0002",
    "\u0002\u0002\u01e4\u01e5\u0003\u0002\u0002\u0002\u01e5\u009c\u0003\u0002",
    "\u0002\u0002\u01e6\u01e4\u0003\u0002\u0002\u0002\u01e7\u01e8\u0007)",
    "\u0002\u0002\u01e8\u009e\u0003\u0002\u0002\u0002\u01e9\u01f1\u0005\u009d",
    "L\u0002\u01ea\u01eb\u0007^\u0002\u0002\u01eb\u01f0\u0007^\u0002\u0002",
    "\u01ec\u01ed\u0007^\u0002\u0002\u01ed\u01f0\u0007)\u0002\u0002\u01ee",
    "\u01f0\n\u0010\u0002\u0002\u01ef\u01ea\u0003\u0002\u0002\u0002\u01ef",
    "\u01ec\u0003\u0002\u0002\u0002\u01ef\u01ee\u0003\u0002\u0002\u0002\u01f0",
    "\u01f3\u0003\u0002\u0002\u0002\u01f1\u01ef\u0003\u0002\u0002\u0002\u01f1",
    "\u01f2\u0003\u0002\u0002\u0002\u01f2\u01f4\u0003\u0002\u0002\u0002\u01f3",
    "\u01f1\u0003\u0002\u0002\u0002\u01f4\u01f5\u0005\u009dL\u0002\u01f5",
    "\u00a0\u0003\u0002\u0002\u0002\u01f6\u01f7\u0007$\u0002\u0002\u01f7",
    "\u00a2\u0003\u0002\u0002\u0002\u01f8\u0200\u0005\u00a1N\u0002\u01f9",
    "\u01fa\u0007^\u0002\u0002\u01fa\u01ff\u0007^\u0002\u0002\u01fb\u01fc",
    "\u0007^\u0002\u0002\u01fc\u01ff\u0007$\u0002\u0002\u01fd\u01ff\n\u0011",
    "\u0002\u0002\u01fe\u01f9\u0003\u0002\u0002\u0002\u01fe\u01fb\u0003\u0002",
    "\u0002\u0002\u01fe\u01fd\u0003\u0002\u0002\u0002\u01ff\u0202\u0003\u0002",
    "\u0002\u0002\u0200\u01fe\u0003\u0002\u0002\u0002\u0200\u0201\u0003\u0002",
    "\u0002\u0002\u0201\u0203\u0003\u0002\u0002\u0002\u0202\u0200\u0003\u0002",
    "\u0002\u0002\u0203\u0204\u0005\u00a1N\u0002\u0204\u00a4\u0003\u0002",
    "\u0002\u0002\u0205\u0206\u0007\'\u0002\u0002\u0206\u0207\u0007A\u0002",
    "\u0002\u0207\u020b\u0003\u0002\u0002\u0002\u0208\u020a\u0005\u0093G",
    "\u0002\u0209\u0208\u0003\u0002\u0002\u0002\u020a\u020d\u0003\u0002\u0002",
    "\u0002\u020b\u0209\u0003\u0002\u0002\u0002\u020b\u020c\u0003\u0002\u0002",
    "\u0002\u020c\u020e\u0003\u0002\u0002\u0002\u020d\u020b\u0003\u0002\u0002",
    "\u0002\u020e\u020f\u0007}\u0002\u0002\u020f\u00a6\u0003\u0002\u0002",
    "\u0002\u0210\u0211\u0007\u007f\u0002\u0002\u0211\u00a8\u0003\u0002\u0002",
    "\u0002\u0212\u0213\u0007\'\u0002\u0002\u0213\u0214\u0007}\u0002\u0002",
    "\u0214\u00aa\u0003\u0002\u0002\u0002\u0215\u0216\u0007\'\u0002\u0002",
    "\u0216\u0217\u0007\u007f\u0002\u0002\u0217\u00ac\u0003\u0002\u0002\u0002",
    "\u0218\u0219\u0007<\u0002\u0002\u0219\u00ae\u0003\u0002\u0002\u0002",
    "\u021a\u021f\u0005\u0083?\u0002\u021b\u021e\u0005\u0083?\u0002\u021c",
    "\u021e\t\u0012\u0002\u0002\u021d\u021b\u0003\u0002\u0002\u0002\u021d",
    "\u021c\u0003\u0002\u0002\u0002\u021e\u0221\u0003\u0002\u0002\u0002\u021f",
    "\u021d\u0003\u0002\u0002\u0002\u021f\u0220\u0003\u0002\u0002\u0002\u0220",
    "\u00b0\u0003\u0002\u0002\u0002\u0221\u021f\u0003\u0002\u0002\u0002\u0222",
    "\u0223\u0007\'\u0002\u0002\u0223\u00b2\u0003\u0002\u0002\u0002\"\u0002",
    "\u0003\u0004\u0005\u0006\u0007\b\u00b6\u00cf\u00eb\u00f8\u0133\u0138",
    "\u015a\u0184\u018b\u0195\u01a0\u01a7\u01ae\u01b7\u01bb\u01ce\u01da\u01e4",
    "\u01ef\u01f1\u01fe\u0200\u020b\u021d\u021f\u0013\u0002\u0003\u0002\u0007",
    "\u0003\u0002\u0007\u0004\u0002\u0003\r\u0002\u0007\u0006\u0002\u0007",
    "\u0007\u0002\u0007\b\u0002\u0003\u0018\u0003\u0006\u0002\u0002\t\u001b",
    "\u0002\u0003 \u0004\t\u001e\u0002\u0003)\u0005\t \u0002\u00033\u0006",
    "\t\"\u0002\u00036\u0007"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function BisonLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

BisonLexer.prototype = Object.create(antlr4.Lexer.prototype);
BisonLexer.prototype.constructor = BisonLexer;

BisonLexer.EOF = antlr4.Token.EOF;
BisonLexer.WS = 1;
BisonLexer.BLOCK_COMMENT = 2;
BisonLexer.LINE_COMMENT = 3;
BisonLexer.PIPE = 4;
BisonLexer.SEMICOLON = 5;
BisonLexer.DIRECTIVE = 6;
BisonLexer.ID = 7;
BisonLexer.INT = 8;
BisonLexer.CHAR = 9;
BisonLexer.STRING = 10;
BisonLexer.PROLOGUE_START = 11;
BisonLexer.PERCENT_PERCENT = 12;
BisonLexer.BRACED_CODE_START = 13;
BisonLexer.PREDICATE_START = 14;
BisonLexer.TAG_START = 15;
BisonLexer.REF = 16;
BisonLexer.ERROR_CHARACTER = 17;
BisonLexer.AFTER_ID_WS = 18;
BisonLexer.AFTER_ID_BLOCK_COMMENT = 19;
BisonLexer.AFTER_ID_LINE_COMMENT = 20;
BisonLexer.AFTER_ID_OPEN_BRACKET = 21;
BisonLexer.AFTER_ID_COLON = 22;
BisonLexer.AFTER_ID_ANY = 23;
BisonLexer.PROLOGUE_CLOSE = 24;
BisonLexer.PROLOGUE_CONTENT = 25;
BisonLexer.EPILOGUE_CONTENT = 26;
BisonLexer.BRACED_CODE_CLOSE = 27;
BisonLexer.BRACED_CODE_CONTENT = 28;
BisonLexer.PREDICATE_CLOSE = 29;
BisonLexer.PREDICATE_CONTENT = 30;
BisonLexer.TAG_CLOSE = 31;
BisonLexer.TAG_CONTENT = 32;
BisonLexer.PREDICATE_QUESTION = 33;
BisonLexer.TAG_APOSTROPH = 34;

BisonLexer.AFTER_ID = 1;
BisonLexer.PROLOGUE = 2;
BisonLexer.EPILOGUE = 3;
BisonLexer.BRACED_CODE = 4;
BisonLexer.PREDICATE = 5;
BisonLexer.TAG = 6;

BisonLexer.prototype.modeNames = [ "DEFAULT_MODE", "AFTER_ID", "PROLOGUE", 
                                   "EPILOGUE", "BRACED_CODE", "PREDICATE", 
                                   "TAG" ];

BisonLexer.prototype.literalNames = [ null, null, null, null, null, null, 
                                      null, null, null, null, null, null, 
                                      "'%%'", "'{'", null, null, null, null, 
                                      null, null, null, null, null, null, 
                                      null, null, null, null, null, null, 
                                      null, null, null, "'?'", "'&'" ];

BisonLexer.prototype.symbolicNames = [ null, "WS", "BLOCK_COMMENT", "LINE_COMMENT", 
                                       "PIPE", "SEMICOLON", "DIRECTIVE", 
                                       "ID", "INT", "CHAR", "STRING", "PROLOGUE_START", 
                                       "PERCENT_PERCENT", "BRACED_CODE_START", 
                                       "PREDICATE_START", "TAG_START", "REF", 
                                       "ERROR_CHARACTER", "AFTER_ID_WS", 
                                       "AFTER_ID_BLOCK_COMMENT", "AFTER_ID_LINE_COMMENT", 
                                       "AFTER_ID_OPEN_BRACKET", "AFTER_ID_COLON", 
                                       "AFTER_ID_ANY", "PROLOGUE_CLOSE", 
                                       "PROLOGUE_CONTENT", "EPILOGUE_CONTENT", 
                                       "BRACED_CODE_CLOSE", "BRACED_CODE_CONTENT", 
                                       "PREDICATE_CLOSE", "PREDICATE_CONTENT", 
                                       "TAG_CLOSE", "TAG_CONTENT", "PREDICATE_QUESTION", 
                                       "TAG_APOSTROPH" ];

BisonLexer.prototype.ruleNames = [ "WS", "BLOCK_COMMENT", "LINE_COMMENT", 
                                   "PIPE", "SEMICOLON", "DIRECTIVE", "ID", 
                                   "INT", "CHAR", "STRING", "PROLOGUE_START", 
                                   "PERCENT_PERCENT", "BRACED_CODE_START", 
                                   "PREDICATE_START", "TAG_START", "REF", 
                                   "ERROR_CHARACTER", "AFTER_ID_WS", "AFTER_ID_BLOCK_COMMENT", 
                                   "AFTER_ID_LINE_COMMENT", "AFTER_ID_OPEN_BRACKET", 
                                   "AFTER_ID_COLON", "AFTER_ID_ANY", "PROLOGUE_OPEN", 
                                   "PROLOGUE_SQUOTED_STRING", "PROLOGUE_DQUOTED_STRING", 
                                   "PROLOGUE_SLASH", "PROLOGUE_BLOCK_COMMENT", 
                                   "PROLOGUE_LINE_COMMENT", "PROLOGUE_PERCENT", 
                                   "PROLOGUE_CLOSE", "PROLOGUE_CONTENT", 
                                   "EPILOGUE_CONTENT", "BRACED_CODE_OPEN", 
                                   "BRACED_CODE_SQUOTED_STRING", "BRACED_CODE_DQUOTED_STRING", 
                                   "BRACED_CODE_SLASH", "BRACED_CODE_BLOCK_COMMENT", 
                                   "BRACED_CODE_LINE_COMMENT", "BRACED_CODE_CLOSE", 
                                   "BRACED_CODE_CONTENT", "PREDICATE_OPEN", 
                                   "PREDICATE_SQUOTED_STRING", "PREDICATE_DQUOTED_STRING", 
                                   "PREDICATE_SLASH", "PREDICATE_BLOCK_COMMENT", 
                                   "PREDICATE_LINE_COMMENT", "PREDICATE_QUESTION", 
                                   "PREDICATE_PERCENT", "PREDICATE_CLOSE", 
                                   "PREDICATE_CONTENT", "TAG_OPEN", "TAG_CLOSE", 
                                   "TAG_APOSTROPH", "TAG_CONTENT", "Digit", 
                                   "Int", "HexInt", "Upper", "Lower", "Alpha", 
                                   "Letter", "LBrace", "RBrace", "LBracket", 
                                   "RBracket", "DSlash", "Pipe", "Semicolon", 
                                   "Ws", "Hws", "Vws", "BlockComment", "LineComment", 
                                   "SQuote", "SQuoteString", "DQuote", "DQuoteString", 
                                   "OpenPredicate", "ClosePredicate", "OpenPrologue", 
                                   "ClosePrologue", "Colon", "Id", "Percent" ];

BisonLexer.prototype.grammarFileName = "BisonLexer.g4";


BisonLexer.prototype.action = function(localctx, ruleIndex, actionIndex) {
	switch (ruleIndex) {
	case 11:
		this.PERCENT_PERCENT_action(localctx, actionIndex);
		break;
	case 22:
		this.AFTER_ID_ANY_action(localctx, actionIndex);
		break;
	case 30:
		this.PROLOGUE_CLOSE_action(localctx, actionIndex);
		break;
	case 39:
		this.BRACED_CODE_CLOSE_action(localctx, actionIndex);
		break;
	case 49:
		this.PREDICATE_CLOSE_action(localctx, actionIndex);
		break;
	case 52:
		this.TAG_CLOSE_action(localctx, actionIndex);
		break;
	default:
		throw "No registered action for:" + ruleIndex;
	}
};

BisonLexer.prototype.PERCENT_PERCENT_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 0:

		    if (this.percentPercentCount === undefined) {
		        this.percentPercentCount = 0;
		    }

		    if (++this.percentPercentCount == 2) {
		        this.pushMode(BisonLexer.EPILOGUE);
		    }

		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

BisonLexer.prototype.AFTER_ID_ANY_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 1:

		    this._input.seek(this._tokenStartCharIndex);
		    this._type = antlr4.Lexer.MORE;

		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

BisonLexer.prototype.PROLOGUE_CLOSE_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 2:

		    this.popMode();

		    if (this._modeStack.length) {
		        this.type = BisonLexer.PROLOGUE_CONTENT;
		    }

		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

BisonLexer.prototype.BRACED_CODE_CLOSE_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 3:

		    this.popMode();

		    if (this._modeStack.length) {
		        this.type = BisonLexer.BRACED_CODE_CONTENT;
		    }

		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

BisonLexer.prototype.PREDICATE_CLOSE_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 4:

		    this.popMode();

		    if (this._modeStack.length) {
		        this.type = BisonLexer.PREDICATE_CONTENT;
		    }

		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};

BisonLexer.prototype.TAG_CLOSE_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 5:

		    this.popMode();

		    if (this._modeStack.length) {
		        this.type = BisonLexer.TAG_CONTENT;
		    }

		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};


exports.BisonLexer = BisonLexer;

