import Head from 'next/head';
import styles from '../styles/MentionsLegales.module.css';

export default function MentionsLegales() {
    return (
        <div className={styles.mentionsLegales}>
            <h2>Mentions Légales</h2>
            <h4>Propriétaire du site Internet</h4>
            <ul> MAVI POOL
                <li>SASU au capital de 2000 € </li>
                <li>Siège social : 9 Rue Esther Poggio, 06300 Nice, France</li>
                <li>RCS : 101 092 211 R.C.S. Nice</li>
                <li>SIRET : 10109221100016</li>
                <li>Code APE : 81.29b</li>
                <li>Représentée par : Çetin EDES - Président</li>
                <li>Email : mavipool@outlook.fr</li>
                <li>Téléphone : 06 74 81 37 21</li>
                <li>Directeur de la publication : Çetin EDES - Président</li>
                <li>Responsable du site : Çetin EDES - Président</li>
            </ul>
            <h4>Réalisation du site Internet</h4>
            <p>
                Site réalisé par : Dorian RAUD
                Adresse de contact : dorian.raud@oclock.school
            </p>
            <h4>Hébergement du site internet</h4>
            <p>L'hébergement du site est assuré par Vercel, Inc., dont le siège social est situé au 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
                Pour toute question ou demande relative au site, vous pouvez contacter le responsable de la publication au 04 94 09 78 78
                La maintenance technique du site est assurée par : MAVI POOL
            </p>
            <h4>Propriété intellectuelle</h4>
            <p>
                L’ensemble du site, incluant notamment :
                la structure générale,
                les textes,
                les images,
                les photographies,
                les vidéos,
                les logos,
                les éléments graphiques,
                le savoir-faire,
                et tout autre contenu,
                est la propriété exclusive de MAVI POOL, sauf mention contraire.
                Toute reproduction, représentation, modification, publication, adaptation totale ou partielle du site ou de l’un de ses éléments, sans autorisation écrite préalable, est strictement interdite et constitue une contrefaçon au sens des articles L.335-2 et suivants du Code de la propriété intellectuelle.
                Les marques, logos et signes distinctifs présents sur le site sont protégés.
                Toute reproduction totale ou partielle sans autorisation est prohibée.
            </p>
            <h4>Données personnelles</h4>
            <p>
                Le site www.mavipool.fr peut utiliser des cookies nécessaires à son bon fonctionnement (navigation, formulaires, sécurité).
                Les données personnelles collectées via les formulaires (nom, email, téléphone, informations techniques) sont utilisées exclusivement pour :
                répondre aux demandes,
                établir des devis,
                assurer le suivi client,
                planifier des interventions.
                Elles ne sont jamais transmises à des tiers non autorisés.
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d’un droit :
                d’accès,
                de rectification,
                d’opposition,
                de suppression,
                de portabilité.
                Pour exercer vos droits :
                mavipool@outlook.fr
            </p>
            <h4>Limitation de responsabilité</h4>
            <p>
                MAVI POOL s’efforce d’assurer l’exactitude des informations présentes sur le site.
                Toutefois, l’entreprise ne saurait être tenue responsable :
                d’erreurs ou omissions,
                d’une indisponibilité temporaire du site,
                de dommages directs ou indirects liés à l’utilisation du site.
            </p>
            <h4>Liens hypertextes</h4>
            <p>
                Le site peut contenir des liens vers des sites tiers.
                MAVI POOL n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
            <h4>Loi applicable</h4>
            <p>
                Les présentes mentions légales sont régies par le droit français.
                En cas de litige, les tribunaux compétents seront ceux du ressort du siège social de MAVI POOL.
            </p>
        </div>

    );
}