import Breadcrumbs from "@/components/ui/breadcrumbs";
import {
  TypographyH1,
  TypographyP,
  TypographyH3,
} from "@/components/ui/typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default async function Page() {
  return (
    <>
      <Breadcrumbs />
      <TypographyH1 className="font-cyber">ROOT Org Chart</TypographyH1>

      {/* CEO Level */}
      <div className="flex justify-center mb-8 mt-16">
        <Card className="w-80">
          <CardHeader className="text-center">
            <Avatar className="mx-auto mb-2">
              <AvatarFallback className="font-cyber">???</AvatarFallback>
            </Avatar>
            <CardTitle className="font-cyber">CEO</CardTitle>
            <Badge variant="destructive">CLASSIFIED</Badge>
          </CardHeader>
          <CardContent>
            <TypographyP className="text-center text-sm text-muted-foreground">
              Executive Director
            </TypographyP>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />
      <TypographyH3 className="font-cyber text-center mb-6">
        Overcorp Oversight
      </TypographyH3>
      <div className="flex justify-center mb-8">
        <Card className="w-80">
          <CardHeader className="text-center">
            <Avatar className="mx-auto mb-2">
              <AvatarFallback className="font-cyber">OC</AvatarFallback>
            </Avatar>
            <CardTitle className="font-cyber">Overcorp Envoy</CardTitle>
            <Badge variant="outline">OVERCORP</Badge>
          </CardHeader>
          <CardContent>
            <TypographyP className="text-center text-sm text-muted-foreground">
              Envoy Delfon Regor
            </TypographyP>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      {/* C-Suite Level */}
      <TypographyH3 className="font-cyber text-center mb-6">
        Executive Leadership
      </TypographyH3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="text-center">
            <Avatar className="mx-auto mb-2">
              <AvatarFallback className="font-cyber">CTO</AvatarFallback>
            </Avatar>
            <CardTitle className="font-cyber">
              Chief Technology Officer
            </CardTitle>
            <Badge variant="outline">TECH</Badge>
          </CardHeader>
          <CardContent>
            <TypographyP className="text-center text-sm">
              Dr. Sarah Henuit
            </TypographyP>
            <TypographyP className="text-center text-xs text-muted-foreground">
              Neural Interface Division
            </TypographyP>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Avatar className="mx-auto mb-2">
              <AvatarFallback className="font-cyber">CFO</AvatarFallback>
            </Avatar>
            <CardTitle className="font-cyber">
              Chief Financial Officer
            </CardTitle>
            <Badge variant="outline">FINANCE</Badge>
          </CardHeader>
          <CardContent>
            <TypographyP className="text-center text-sm">
              Marcwulf Weblun
            </TypographyP>
            <TypographyP className="text-center text-xs text-muted-foreground">
              Corporate Assets
            </TypographyP>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Avatar className="mx-auto mb-2">
              <AvatarFallback className="font-cyber">CSO</AvatarFallback>
            </Avatar>
            <CardTitle className="font-cyber">Chief Security Officer</CardTitle>
            <Badge variant="destructive">SECURITY</Badge>
          </CardHeader>
          <CardContent>
            <TypographyP className="text-center text-sm">
              [REDACTED]
            </TypographyP>
            <TypographyP className="text-center text-xs text-muted-foreground">
              Internal Security
            </TypographyP>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      {/* Department Level */}
      <TypographyH3 className="font-cyber text-center mb-6">
        Department Heads
      </TypographyH3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="border-blue-200">
          <CardHeader className="text-center pb-2">
            <Avatar className="mx-auto mb-2 h-12 w-12">
              <AvatarFallback className="text-xs font-cyber">
                R&D
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-sm font-cyber">
              Research & Development
            </CardTitle>
            <Badge variant="secondary" className="text-xs">
              TECH
            </Badge>
          </CardHeader>
          <CardContent className="pt-2">
            <TypographyP className="text-center text-xs">
              Dr. Harys Zasavo
            </TypographyP>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardHeader className="text-center pb-2">
            <Avatar className="mx-auto mb-2 h-12 w-12">
              <AvatarFallback className="text-xs font-cyber">
                OPS
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-sm font-cyber">Operations</CardTitle>
            <Badge variant="secondary" className="text-xs">
              OPS
            </Badge>
          </CardHeader>
          <CardContent className="pt-2">
            <TypographyP className="text-center text-xs">Osgrot</TypographyP>
          </CardContent>
        </Card>

        <Card className="border-purple-200">
          <CardHeader className="text-center pb-2">
            <Avatar className="mx-auto mb-2 h-12 w-12">
              <AvatarFallback className="text-xs font-cyber">HR</AvatarFallback>
            </Avatar>
            <CardTitle className="text-sm font-cyber">
              Human Resources & Wellness
            </CardTitle>
            <Badge variant="secondary" className="text-xs">
              ADMIN
            </Badge>
          </CardHeader>
          <CardContent className="pt-2">
            <TypographyP className="text-center text-xs">
              Winith Foros
            </TypographyP>
          </CardContent>
        </Card>

        <Card className="border-amber-200">
          <CardHeader className="text-center pb-2">
            <Avatar className="mx-auto mb-2 h-12 w-12">
              <AvatarFallback className="text-xs font-cyber">MC</AvatarFallback>
            </Avatar>
            <CardTitle className="text-sm font-cyber">
              Media Coordinator
            </CardTitle>
            <Badge variant="secondary" className="text-xs">
              MEDIA
            </Badge>
            <Badge variant="default" className="text-xs">
              CYTECH
            </Badge>
          </CardHeader>
          <CardContent className="pt-2">
            <TypographyP className="text-center text-xs">
              Felicity Grand
            </TypographyP>
          </CardContent>
        </Card>

        <Card className="border-red-200">
          <CardHeader className="text-center pb-2">
            <Avatar className="mx-auto mb-2 h-12 w-12">
              <AvatarFallback className="text-xs font-cyber">
                SEC
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-sm font-cyber">Security</CardTitle>
            <Badge variant="destructive" className="text-xs">
              CLASSIFIED
            </Badge>
          </CardHeader>
          <CardContent className="pt-2">
            <TypographyP className="text-center text-xs">
              [REDACTED]
            </TypographyP>
          </CardContent>
        </Card>
      </div>

      {/* Connecting Lines Visualization */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full border-t border-dashed border-muted-foreground/30"></div>
        </div>
        <div className="relative flex justify-center">
          <Badge variant="outline" className="bg-background px-3 font-cyber">
            ORGANIZATIONAL STRUCTURE
          </Badge>
        </div>
      </div>

      <TypographyH3 className="font-cyber text-center my-6">
        Research & Development
      </TypographyH3>
      <div className="space-y-6 mb-8">
        <Card className="border-lime-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                {/* <Badge className="mb-2 bg-lime-500">TEAM ALPHA</Badge> */}
                <CardTitle className="text-sm font-cyber">
                  Cyberware & Sleeves
                </CardTitle>
              </div>
              <Badge variant="outline" className="text-xs">
                5 Technicians
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">RV</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Raguta Vacar</TypographyP>
                <Badge variant="outline" className="text-xs">
                  Corporate Contact Specialist
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">D</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Dunwell</TypographyP>
                <Badge variant="outline" className="text-xs">
                  Acquisitions Expert
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">RG</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Rich Geld</TypographyP>
                <Badge variant="outline" className="text-xs">
                  Metaltech, Electrotech Specialist
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">ER</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Theudis Hill</TypographyP>
                <Badge variant="outline" className="text-xs">
                  Ripperdoc
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">BS</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Dr. Beremi Svin</TypographyP>
                <Badge variant="outline" className="text-xs">
                  Neurotech, Gentech Specialist
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <TypographyH3 className="font-cyber text-center my-6">
        Motion Capture
      </TypographyH3>
      <div className="space-y-6 mb-8">
        <Card className="border-amber-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <CardTitle className="text-sm font-cyber">
                  Field Direction & Recording
                </CardTitle>
              </div>
              <Badge variant="outline" className="text-xs">
                5 Employees
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">VV</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Veremund Voltagio</TypographyP>
                <Badge variant="outline" className="text-xs">
                  Writer
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">V</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Vakr</TypographyP>
                <Badge variant="outline" className="text-xs">
                  Narrative Director
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">E</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Erica</TypographyP>
                <Badge variant="outline" className="text-xs">
                  Graphics
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">E</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Elric</TypographyP>
                <Badge variant="outline" className="text-xs">
                  Marketing
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">S</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Siuntila</TypographyP>
                <Badge variant="outline" className="text-xs">
                  Action Director
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <TypographyH3 className="font-cyber text-center my-6">
        Human Resources & Wellness
      </TypographyH3>
      <div className="space-y-6 mb-8">
        <Card className="border-indigo-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <CardTitle className="text-sm font-cyber">
                  Core HR & Wellness Team
                </CardTitle>
              </div>
              <Badge variant="outline" className="text-xs">
                5 Employees
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">ED</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Euthar Desus</TypographyP>
                <Badge variant="outline" className="text-xs">
                  Admin & Payroll
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">BR</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Boromer Rosu</TypographyP>
                <Badge variant="outline" className="text-xs">
                  Performance Analyst
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">CC</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Magda Clawwulf</TypographyP>
                <Badge variant="outline" className="text-xs">
                  Psyche Masseuse
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">AA</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Anda Alrik</TypographyP>
                <Badge variant="outline" className="text-xs">
                  Memory Shelving Specialist
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">OM</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Odwar Masa</TypographyP>
                <Badge variant="outline" className="text-xs">
                  Biosleeve Medic
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <TypographyH3 className="font-cyber text-center mb-6">
        Operational Teams
      </TypographyH3>
      <div className="space-y-6 mb-8">
        {/* Team Alpha */}
        <Card className="border-orange-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <Badge className="mb-2 bg-orange-500">TEAM ALPHA</Badge>
                <CardTitle className="text-sm font-cyber">
                  Field Operations Unit
                </CardTitle>
              </div>
              <Badge variant="outline" className="text-xs">
                5 Operatives
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">HL</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Hathus Lunis</TypographyP>
                <Badge variant="outline" className="text-xs">
                  KEEPER
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">AV</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Athan Vigil</TypographyP>
                <Badge variant="outline" className="text-xs">
                  CLOSE
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">LW</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Liuva Wallia</TypographyP>
                <Badge variant="outline" className="text-xs">
                  FACILITY
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">ER</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Ermin Rik</TypographyP>
                <Badge variant="outline" className="text-xs">
                  CANON
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">TP</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Totila Philas</TypographyP>
                <Badge variant="outline" className="text-xs">
                  HUSH
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Beta */}
        <Card className="border-cyan-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <Badge className="mb-2 bg-cyan-500">TEAM BETA</Badge>
                <CardTitle className="text-sm font-cyber">
                  Intelligence Unit
                </CardTitle>
              </div>
              <Badge variant="outline" className="text-xs">
                4 Operatives
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {/* Similar operative cards... */}
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">??</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">[NAME REDACTED]</TypographyP>
                <Badge variant="destructive" className="text-xs">
                  CLASSIFIED
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">??</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">[NAME REDACTED]</TypographyP>
                <Badge variant="destructive" className="text-xs">
                  CLASSIFIED
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">??</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">[NAME REDACTED]</TypographyP>
                <Badge variant="destructive" className="text-xs">
                  CLASSIFIED
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">??</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">[NAME REDACTED]</TypographyP>
                <Badge variant="destructive" className="text-xs">
                  CLASSIFIED
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Delta */}
        <Card className="border-fuchsia-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <Badge className="mb-2 bg-fuchsia-500">TEAM DELTA</Badge>
                <CardTitle className="text-sm font-cyber">
                  Field Operations Unit
                </CardTitle>
              </div>
              <Badge variant="outline" className="text-xs">
                5 Operatives
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">SS</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Simund Smith</TypographyP>
                <Badge variant="outline" className="text-xs">
                  WATCHTOWER
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">MD</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Maxim Dag</TypographyP>
                <Badge variant="outline" className="text-xs">
                  IMPACT
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">OB</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Odo Badwila</TypographyP>
                <Badge variant="outline" className="text-xs">
                  SEVERANCE
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">AR</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Austra Riks</TypographyP>
                <Badge variant="outline" className="text-xs">
                  CANON
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">TI</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Theodoric Imir</TypographyP>
                <Badge variant="outline" className="text-xs">
                  HUSH
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Gamma */}
        <Card className="border-emerald-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <Badge className="mb-2 bg-emerald-500">TEAM GAMMA</Badge>
                <CardTitle className="text-sm font-cyber">
                  Field Operations Unit
                </CardTitle>
              </div>
              <Badge variant="outline" className="text-xs">
                5 Operatives
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">LN</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Leo Nekomimi</TypographyP>
                <Badge variant="outline" className="text-xs">
                  WATCHTOWER
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">S</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Symon</TypographyP>
                <Badge variant="outline" className="text-xs">
                  HUSH
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">A</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Ace</TypographyP>
                <Badge variant="outline" className="text-xs">
                  CANON
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">T</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Tedward</TypographyP>
                <Badge variant="outline" className="text-xs">
                  KEEPER
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">D</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Dothan</TypographyP>
                <Badge variant="outline" className="text-xs">
                  SEVERANCE
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Theta */}
        <Card className="border-red-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <Badge className="mb-2 bg-red-500">TEAM THETA</Badge>
                <CardTitle className="text-sm font-cyber">
                  Field Operations Unit
                </CardTitle>
              </div>
              <Badge variant="outline" className="text-xs">
                5 Operatives
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">R</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Ratty</TypographyP>
                <Badge variant="outline" className="text-xs">
                  QUILL
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">L</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Lars</TypographyP>
                <Badge variant="outline" className="text-xs">
                  IMPACT
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">O</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Obsydian</TypographyP>
                <Badge variant="outline" className="text-xs">
                  NOTION
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">C</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Charity</TypographyP>
                <Badge variant="outline" className="text-xs">
                  FACILITY
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">B</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Buzz</TypographyP>
                <Badge variant="outline" className="text-xs">
                  CLOSE
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <TypographyH3 className="font-cyber text-center mb-6">
        Operative Handlers
      </TypographyH3>
      <div className="space-y-6 mb-8">
        <Card className="border-emerald-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <Badge className="mb-2 bg-emerald-500">TEAM GAMMA</Badge>
                <CardTitle className="text-sm font-cyber">
                  Operatives Handler Unit
                </CardTitle>
              </div>
              <Badge variant="outline" className="text-xs">
                5 Handlers
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">VE</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Varo Euri</TypographyP>
                <Badge variant="outline" className="text-xs">
                  HANDLES: LEO
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">CR</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Comber Risimod</TypographyP>
                <Badge variant="outline" className="text-xs">
                  HANDLES: SYMON
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">AH</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Artha Hil</TypographyP>
                <Badge variant="outline" className="text-xs">
                  HANDLES: ACE
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">TS</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Tila Swan</TypographyP>
                <Badge variant="outline" className="text-xs">
                  HANDLES: TEDWARD
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">FH</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Fern Hairuwulf</TypographyP>
                <Badge variant="outline" className="text-xs">
                  HANDLES: DOTHAN
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-red-200">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <Badge className="mb-2 bg-red-500">TEAM THETA</Badge>
                <CardTitle className="text-sm font-cyber">
                  Operatives Handler Unit
                </CardTitle>
              </div>
              <Badge variant="outline" className="text-xs">
                5 Handlers
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">GC</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Gorn Chinda</TypographyP>
                <Badge variant="outline" className="text-xs">
                  HANDLES: RATTY
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">LM</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Lars Manrich</TypographyP>
                <Badge variant="outline" className="text-xs">
                  HANDLES: LARS
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">AG</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Alar Gild</TypographyP>
                <Badge variant="outline" className="text-xs">
                  HANDLES: OBSYDIAN
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">AG</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Avagis Glory</TypographyP>
                <Badge variant="outline" className="text-xs">
                  HANDLES: CHARITY
                </Badge>
              </div>
              <div className="text-center">
                <Avatar className="mx-auto mb-1 h-8 w-8">
                  <AvatarFallback className="text-xs">B</AvatarFallback>
                </Avatar>
                <TypographyP className="text-xs">Liuva Bremund</TypographyP>
                <Badge variant="outline" className="text-xs">
                  HANDLES: BUZZ
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-12" />

      {/* Contact Information */}
      <TypographyH3 className="font-cyber text-center mb-6">
        Emergency Protocols
      </TypographyH3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="border-red-500/50">
          <CardHeader>
            <CardTitle className="font-cyber text-red-500">
              CRITICAL EMERGENCY
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TypographyP className="text-sm">
              For immediate threats to ROOT personnel or assets
            </TypographyP>
            <Badge variant="destructive" className="mt-2">
              CODE RED: Contact Mission Control
            </Badge>
          </CardContent>
        </Card>

        <Card className="border-yellow-500/50">
          <CardHeader>
            <CardTitle className="font-cyber text-yellow-600">
              STANDARD REPORTING
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TypographyP className="text-sm">
              Routine operational updates and status reports
            </TypographyP>
            <Badge variant="outline" className="mt-2">
              Standard Channels
            </Badge>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-12" />

      {/* Footer Information */}
      <div className="text-center space-y-4 pb-8">
        <TypographyP className="text-xs text-muted-foreground">
          Last Updated: [TIMESTAMP REDACTED]
        </TypographyP>
        <TypographyP className="text-xs text-muted-foreground">
          Classification Level: INTERNAL USE ONLY
        </TypographyP>
        <Badge variant="outline" className="font-cyber">
          ROOT CORPORATE STRUCTURE v2.1
        </Badge>
      </div>
    </>
  );
}
